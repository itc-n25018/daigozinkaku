import { NextResponse } from "next/server";
import { client } from "@/lib/microcms";

type Survivor = {
  id: string;
  name: string;
  image?: {
    url: string;
  };
};

export async function GET() {
  try {
    const data = await client.get<{ contents: Survivor[] }>({
      endpoint: "survivor",
      queries: { limit: 100 },
    });

    const formatted = data.contents.map((s) => ({
      id: s.id,
      name: s.name,
      imageUrl: s.image?.url ?? "",
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    return NextResponse.json(
      { message: "データ取得に失敗しました" },
      { status: 500 },
    );
  }
}
