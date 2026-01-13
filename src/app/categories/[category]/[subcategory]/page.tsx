export default function SubcategoryPage({
  params,
}: {
  params: { category: string; subcategory: string };
}) {
  return (
    <div>
      <h1>Category: {params.category} - Subcategory: {params.subcategory}</h1>
    </div>
  );
}
