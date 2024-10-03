import { fetchComments } from "@/lib/data";
import CommentItem from "./comment-item";
import BodyLayout from "./ui/body-layout";
import CommentForm from "./comment-form";
import Title from "./ui/title";

export default async function Comment() {
  const comments = await fetchComments();

  return (
    <BodyLayout>
      <Title title="MESSAGE" />
      <section className="py-8 lg:py-12 antialiased">
        <div className="max-w-2xl mx-auto px-4">

          <CommentForm />
          <CommentItem comments={comments} />

        </div>
      </section>
    </BodyLayout>
  )
}