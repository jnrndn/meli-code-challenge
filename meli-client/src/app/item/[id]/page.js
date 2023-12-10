import ItemDetails from '../../components/ItemDetails';
export default function Item({ params }) {
  return (
    <main>
      <ItemDetails pageParams={params} />
    </main>
  );
}
