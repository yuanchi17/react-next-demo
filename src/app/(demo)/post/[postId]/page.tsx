export default function PostDetail({params}:{params:{postId:number}}) {
  const postId = params.postId
  return (
    <p>PostDetail Page in /(demo)/post/{postId}</p>
  )
}
