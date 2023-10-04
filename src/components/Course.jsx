import React from 'react'

export default function Course({image,title,description}) {
    // console.log(props);
    // const title = props.title;
    // const description=props.description;
    // const {title, description} = props
    return (
        <>
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={image} alt="Placeholder image" />
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">{title}</p>
            </div>
            <div className="card-content">
                {description}
            </div>
        </div>
        </>
    )
}
