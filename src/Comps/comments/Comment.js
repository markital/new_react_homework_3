export default function Comment({item: { id, postId, name}}) {
    return (
        <div>
            {id}. {postId}.{name}
        </div>
    )
};