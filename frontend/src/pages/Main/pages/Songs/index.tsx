import PageHeader from "../../../../components/atom/Typography/PageHeader";

const Songs = () => {
  return (
    <>
      <PageHeader title="Search Songs" />
      <div className="flex flex-col w-96">
        <label>Search by title</label>
        <input
          type="text"
          className="w-full rounded-lg text-xl bg-slate-100 p-3 ring-0 outline-none"
        />

        <h2>Recently added songs</h2>
      </div>
    </>
  );
};

export default Songs;
