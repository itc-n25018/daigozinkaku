import { NextResponse } from "next/server";
import { client } from "@/lib/microcms";

type CmsSurvivor = {
  id: string;
  name: string;
  image?: { url: string };
};

export async function GET() {
  try {
    const data = await client.get<{ contents: CmsSurvivor[] }>({
      endpoint: "survivor",
      queries: { limit: 100 },
    });

    const formatted = data.contents.map((s) => ({
      id: s.id,
      name: s.name,
      imageUrl: s.image?.url ?? "", // ← 空文字でもOK
    }));

    return NextResponse.json(formatted);
  } catch (error: any) {
    console.error("microCMS fetch error:", error);

    // microCMSエラーの中身が見えるように返す（開発中だけ）
    return NextResponse.json(
      {
        message: "データ取得に失敗しました",
        error: String(error?.message ?? error),
      },
      { status: 500 },
    );
  }
}

// import { NextResponse } from "next/server";
// import { client } from "../../../lib/microcms";

// type CmsSurvivor = {
//   id: string;
//   name: string;
//   image?: { url: string };
// };

// export async function GET() {
//   try {
//     const data = await client.get<{ contents: CmsSurvivor[] }>({
//       endpoint: "survivor",
//       queries: { limit: 100 },
//     });

//     const formatted = data.contents.map((s: CmsSurvivor) => ({
//       id: s.id,
//       name: s.name,
//       imageUrl: s.image?.url ?? "",
//     }));

//     return NextResponse.json(formatted);
//   } catch (error) {
//     console.error("microCMS fetch error:", error);
//     return NextResponse.json(
//       { message: "データ取得に失敗しました" },
//       { status: 500 },
//     );
//   }
// }
