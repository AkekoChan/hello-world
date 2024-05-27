export const POST = async (req: Request) => {
  const res = await req.json();
  return Response.json({ res });
};
