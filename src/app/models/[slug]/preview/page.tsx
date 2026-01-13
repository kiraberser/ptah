export default function ModelPreviewPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <h1>Fullscreen 3D Preview: {params.slug}</h1>
    </div>
  );
}
