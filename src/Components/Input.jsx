export default function input({ label, textarea, ...props }) {
    const classes = `w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600
     focus:outline-none focus:border-stone-600`;
  return (
    <>
      <p className="flex flex-col gap-2 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          {label}
        </label>
        {textarea ? (
          <textarea
            className={classes}
            {...props}
          />
        ) : (
          <input className={classes} {...props} />
        )}
      </p>
    </>
  );
}
