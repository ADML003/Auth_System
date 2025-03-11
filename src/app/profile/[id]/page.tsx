export default function UserProfile({ params }: any) {
  return (
    <div className="text-center mt-12">
      <h1>Profile Page</h1>
      <hr />
      <p>profile page</p>
      <span className="  ml-2 rounded bg-orange-500 text-black">
        {params.id}
      </span>
    </div>
  );
}
//cdc
