let Refine = (props) => {
  let { bookmarks, refine, handleRefine } = props;

  let tags = ["all", ...new Set(bookmarks.map((v) => v.tag))];
  let usage = ["all", "unused", "used"];

  return (
    <>
      <section className="w-full my-4 md:my-6 p-2 md:p-4 bg-white rounded-2xl border-2 border-light text-deep">
        {/* Tag */}
        <div className="flex items-center gap-8 bg-surface p-4 rounded-2xl cursor-pointer border-2 border-light">
          <h1 className="font-[coolvetica] text-sm md:text-base">Category</h1>
          <div className="flex items-center flex-wrap gap-2 font-[bricolage]">
            {tags.map((v, i, a) => {
              return (
                <div
                  key={i}
                  className={`text-xs md:text-sm lowercase border-2 px-3 py-1 rounded-full ${refine.tag === v ? "bg-deep text-surface border-deep " : "bg-light border-mid text-deep"}`}
                  onClick={() => {
                    let newRefine = {
                      tag: v,
                      usage: refine.usage,
                    };
                    handleRefine(newRefine);
                  }}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>

        {/* Usage */}
        <div className="flex items-center gap-8 mt-4 bg-surface p-4 rounded-2xl cursor-pointer border-2 border-light">
          <h1 className="font-[coolvetica] text-sm md:text-base">Status</h1>

          <div className="flex items-center flex-wrap gap-2 font-[bricolage]">
            {usage.map((v, i, a) => {
              return (
                <div
                  key={i}
                  className={`text-xs md:text-sm lowercase border-2 px-3 py-1 rounded-full ${refine.usage === v ? "bg-deep text-surface border-deep " : "bg-light border-mid text-deep"}`}
                  onClick={() => {
                    let newRefine = {
                      tag: refine.tag,
                      usage: v,
                    };
                    handleRefine(newRefine);
                  }}
                >
                  {v}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Refine;
