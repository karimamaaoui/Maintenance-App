import React from "react"; 
import Sidebar from "../Sidebar/Sidebar";

function UpdateProfile() {
  return (
    <div className="flex">
      <Sidebar />
      <div class="flex justify-center mt-20 px-8">
    <form class="max-w-2xl">
        <div class="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
            <h2 class="text-xl text-gray-600 dark:text-gray-300 pb-2">Account settings:</h2>

            <div class="flex flex-col gap-2 w-full border-gray-400">

                <div>
                    <label class="text-gray-600 dark:text-gray-400">First Name
                    </label>
                    <input
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text" />
                </div>

                <div>
                    <label class="text-gray-600 dark:text-gray-400">Last Name
                    </label>
                    <input
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text" />
                </div>

                <div>
                    <label class="text-gray-600 dark:text-gray-400">Email</label>
                    <input
                        class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                        type="text" />
                </div>

                <div class="flex justify-end">
                <div class="p-6 border-t border-gray-200 rounded-b">
        <button class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Save all</button>
    </div>
                </div>
            </div>
        </div>
    </form>
</div>
    </div>
  );
}

export default UpdateProfile;
