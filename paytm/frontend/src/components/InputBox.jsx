export function InputBox({ label, placeholder, onChange }) {
    return (
      <div className="mt-4  rounded-xl m-2 p-2">
        <div className="text-lg font-medium text-center py-3">{label}</div>
        <input
          onChange={onChange}
          placeholder={placeholder}
          className="w-2/4 px-2 py-1 border border-blue-300 rounded-lg  text-center bg-slate-50"
        />
      </div>
    );
  } 