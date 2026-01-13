export default function ModelDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>Model: {params.slug}</h1>
    </div>
  );
}
