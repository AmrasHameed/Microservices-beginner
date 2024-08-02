const CommentList = ({ comments }) => {

  const renderedComments = comments.map((comment) => {
    let content;
    if(comment.status==='approved') {
      content = comment.content
    }
    if(comment.status==='pending') {
      content = 'This comment is awaiting moderation'
    }
    if(comment.status==='rejected') {
      content = 'This comment has been Rejected'
    }
    return <li key={comment.id}>{content}</li>;
  });
  return <ul className="list-disc pl-5 space-y-2">{renderedComments}</ul>;
};

export default CommentList;
