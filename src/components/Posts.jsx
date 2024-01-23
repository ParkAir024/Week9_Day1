import Post from "./post"

export const Posts = () => {

    const posts = [
        {
          "body": "Mt. Fuji",
          "id": "3",
          "timestamp": "2024-01-03T00:35:27.568774",
          "user_id": "1"
        },
        {
          "body": "Osaka Castle",
          "id": "4",
          "timestamp": "2024-01-03T00:54:46.188100",
          "user_id": "1"
        },
        {
          "body": "Kyoto",
          "id": "5",
          "timestamp": "2024-01-03T00:54:49.010977",
          "user_id": "1"
        },
        {
          "body": "Tokyo",
          "id": "6",
          "timestamp": "2024-01-03T00:54:50.843257",
          "user_id": "1"
        },
        {
            "body": "Osaka",
            "id": "7",
            "timestamp": "2024-01-03T00:54:51.00000",
            "user_id": "1"
          }
      ]

      return(
        <>
        {
            posts.length > 0 ? posts.map((post) => {
                return <Post key={post.id} post={post} />
            }) : <p>No Locations to display</p>
        }</>
        
      )
}