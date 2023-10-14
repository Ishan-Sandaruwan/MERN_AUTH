export default function Signin() {
  return (
    <div className="bg-slate-100 toMid w-full min-h-screen p-3">
      <div className="bg-white rounded-md shadow-md sm:max-w-5xl max-w-md flex sm:flex-row flex-col">
        <div className="p-3 sm:p-8 flex flex-col gap-2 items-center sm:w-1/2">
          <div>
            <h2 className="gradient-text text-2xl font-bold mb-3">
              We are the lotus team
            </h2>
          </div>
          <form className="flex flex-col w-full gap-2 m-1">
            <label>Please login to your account</label>
            <input
              placeholder="Username"
              type="text"
              name="username"
              className="inputtxt mt-2"
            />
            <input
              placeholder="Password"
              type="text"
              name="Password"
              className="inputtxt mb-4"
            />
            <button className="button1">LOG IN</button>
            <button className="button2 bg-[#DB4437]">Sign with Google</button>
            <button className="button2 bg-[#4267B2]">Sign with Facebook</button>
            <p className="text-center py-3">Forgot password?</p>
          </form>
          <div className="flex w-full justify-between items-center">
            <p>Don&apos;t have an account</p>
            <button className="border-2 gradient-border gradient-text px-2 py-1 hover:opacity-80 smooth">
              REGISTER
            </button>
          </div>
        </div>
        <div className="gradient1 rounded-b-md sm:rounded-r-lg p-4 text-white flex flex-col sm:items-center sm:justify-center sm:gap-5 sm:w-1/2">
          <h3 className="text-lg mb-3 font-semibold">
            We are more than just a company
          </h3>
          <p className="text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
}
