export const POST = async (req: Request) => {
  const formData = await req.formData();
  console.log(formData);

  return new Response(JSON.stringify({ message: "ok" }), {
    status: 200,
  });
};
