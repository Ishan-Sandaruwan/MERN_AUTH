export default function Profile() {
  return (
    <div className="">
      <div className="p-3 max-w-lg sm:max-w-xl mx-auto min-h-[90vh] flex flex-col justify-between gap-4 ">
        <h1 className="text-3xl font-semibold text-center ">Your profile</h1>
        <form className="flex flex-col gap-3">
          {/* <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        /> */}
          <img
            // onClick={() => fileRef.current.click()}
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60"
            alt="profile"
            className="rounded-full h-24 w-24 sm:h-32 sm:w-32 object-cover cursor-pointer self-center mt-2"
          />
          <input
            type="text"
            placeholder="username"
            id="username"
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="email"
            id="email"
            className="border p-3 rounded-lg"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            className="border p-3 rounded-lg"
          />
          <button className="button1 shadow-md hover:opacity-80 smooth ">
            update
          </button>
        </form>
        <div className="flex flex-col text-red-600 ">
          <p className="font-bold">Danger ZONE</p>
          <div className="flex justify-between mt-4">
            <span className=" cursor-pointer smooth hover:font-bold ">Delete account</span>
            <span className="cursor-pointer smooth hover:font-bold ">Sign out</span>
          </div>
        </div>
        {/* <p className="text-red-700 mt-5 text-center">{error ? error : ''}</p> */}
        {/* <p className="text-green-700 mt-3 text-center">{updateSuccess ? 'user is updated successfully ' : ''}</p> */}
      </div>
    </div>
  );
}
