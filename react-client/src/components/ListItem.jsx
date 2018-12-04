import React from 'react';
import api from '../../../config.js';

const ListItem = (props) => {
  let image;
  if (props.item.photos && props.item.photos.length > 0) {
    const baseURL = 'https://maps.googleapis.com/maps/api/place/photo?'
    const params = {
      photo_reference: props.item.photos[0].photo_reference,
      key: api.GOOGLE_API_KEY,
      maxwidth: 200,
    }
    let paramStr = '';
    for (let param in params) {
      paramStr += `&${param}=${params[param]}`;
    }
    paramStr = paramStr.slice(1);
    const imageURL = baseURL + paramStr;
    image = <img src={imageURL} />;
  }
  return (
    <div>
      { props.item.name }
      { 'Rating' + props.item.rating }
      { image }
    </div>
  )
}


export default ListItem;


// https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=YOUR_API_KEY