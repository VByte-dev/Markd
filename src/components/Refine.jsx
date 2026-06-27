let Refine = (props) => {
  let { bookmarks, refine, setRefine, handleRefine } = props;

  let tags = ["all", ...new Set(bookmarks.map((v) => v.tag))];
  let usage = ["all", "unused", "used"];

  return (
    <>
      <section className="w-full my-4 md:my-6 p-2 md:p-4 bg-white rounded-2xl border-2 border-light font-[bricolage] text-deep text-sm">
        {/* Tag */}
        <div className="flex lex flex-wrap gap-2 bg-surface p-4 rounded-2xl cursor-pointer border-2 border-light">
          {tags.map((v, i, a) => {
            return (
              <div
                key={i}
                className={`lowercase border-2 px-3 py-1 rounded-full ${refine.tag === v ? "bg-deep text-surface border-deep " : "bg-light border-mid text-deep"}`}
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

        {/* Usage */}
        <div className="flex flex-wrap gap-2 mt-4 bg-surface p-4 rounded-2xl cursor-pointer border-2 border-light">
          {usage.map((v, i, a) => {
            return (
              <div
                key={i}
                className={`lowercase border-2 px-3 py-1 rounded-full ${refine.usage === v ? "bg-deep text-surface border-deep " : "bg-light border-mid text-deep"}`}
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
      </section>
    </>
  );
};

export default Refine;
