export  default function Post({item: {title,body,id}}) {
    return (
        <div>
            {id}. {title}.{body}
        </div>
    )
};