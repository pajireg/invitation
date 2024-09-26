import { fetchComments } from "@/lib/data";
import CommentItem from "./comment-item";
import BodyLayout from "./ui/body-layout";
import CommentForm from "./comment-form";

export default async function Comment() {
  const comments = await fetchComments();

  return (
    <BodyLayout>
      <h2 className="text-2xl font-bold text-center">축하 메시지</h2>

      <section className="py-8 lg:py-12 antialiased">
        <div className="max-w-2xl mx-auto px-4">

          <CommentForm />
          <CommentItem comments={comments} />

        </div>
      </section>
    </BodyLayout>
  )
}