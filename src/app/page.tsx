import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><figure className="bg-red-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/rehan.jpg" alt="" width="384" height="512"/>
  <div className ="pt-6 text-center space-y-4">
    <blockquote>
      <h1 className="red:text-sky-400">Muhammad Rehan</h1>
      <p className="text-lg font-medium">
        “Muhammad Rehan is a dedicated and industrious individual known for his strong work ethic and commitment to excellence. He consistently demonstrates a proactive approach, tackling challenges with determination and perseverance. His hard work and reliability make him a valuable asset in any team or project.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Rehan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        pakistan
      </div>
    </figcaption>
  </div>
</figure>
</div>
          </main>
  );
}
