import React, { useState } from "react";
import styles from "./Article2.module.scss";
import Gallery from '../../components/Gallery';
import image1 from '../../assets/GalleryImages/1.jpg';
import image2 from '../../assets/GalleryImages/2.jpg';
import image3 from '../../assets/GalleryImages/3.jpg';
import image4 from '../../assets/GalleryImages/4.jpg';
import image5 from '../../assets/GalleryImages/5.jpg';
import image6 from '../../assets/GalleryImages/6.jpg';
import image1Large from '../../assets/GalleryImages/1-large.jpg'

const Article2 = () => {
  const [readMore,setReadMore]=useState(false);

  const extraContent=<div className={styles.extracontent}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus nec odio bibendum dapibus eget ut urna. Donec <strong>venenatis tempus</strong> lectus et tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla dapibus magna, id vulputate nulla. Quisque nec felis lobortis, hendrerit dui vitae, aliquam nisl. Nam ut justo in neque elementum convallis. Curabitur placerat, felis quis tincidunt bibendum, nunc augue suscipit massa, ac iaculis diam metus nec urna. Praesent urna velit, lobortis sit amet lorem sit amet, rhoncus convallis turpis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit. Similique, libero ratione ipsa nesciunt sint et nihil cumque eligendi hic deleniti nam ad ipsam quidem animi culpa voluptas molestiae. Reprehenderit, aperiam?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus nec odio bibendum dapibus eget ut urna. Donec <strong>venenatis tempus</strong> lectus et tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla dapibus magna, id vulputate nulla. Quisque nec felis lobortis, hendrerit dui vitae, aliquam nisl. Nam ut justo in neque elementum convallis. Curabitur placerat, felis quis tincidunt bibendum, nunc augue suscipit massa, ac iaculis diam metus nec urna. Praesent urna velit, lobortis sit amet lorem sit amet, rhoncus convallis turpis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit. Similique, libero ratione ipsa nesciunt sint et nihil cumque eligendi hic deleniti nam ad ipsam quidem animi culpa voluptas molestiae. Reprehenderit, aperiam?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus nec odio bibendum dapibus eget ut urna. Donec <strong>venenatis tempus</strong> lectus et tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla dapibus magna, id vulputate nulla. Quisque nec felis lobortis, hendrerit dui vitae, aliquam nisl. Nam ut justo in neque elementum convallis. Curabitur placerat, felis quis tincidunt bibendum, nunc augue suscipit massa, ac iaculis diam metus nec urna. Praesent urna velit, lobortis sit amet lorem sit amet, rhoncus convallis turpis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit. Similique, libero ratione ipsa nesciunt sint et nihil cumque eligendi hic deleniti nam ad ipsam quidem animi culpa voluptas molestiae. Reprehenderit, aperiam?</p>
  </div>

  const btnName=readMore?'Read Less << ':'Read More >> '
  return (
    <div className={styles.container}>
    <div className={styles.articletext}>
      <h2>Another article</h2>
      <p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit. Similique, libero ratione ipsa nesciunt sint et nihil cumque eligendi hic deleniti nam ad ipsam quidem animi culpa voluptas molestiae. Reprehenderit, aperiam?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus nec odio bibendum dapibus eget ut urna. Donec <strong>venenatis tempus</strong> lectus et tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla dapibus magna, id vulputate nulla. Quisque nec felis lobortis, hendrerit dui vitae, aliquam nisl. Nam ut justo in neque elementum convallis. Curabitur placerat, felis quis tincidunt bibendum, nunc augue suscipit massa, ac iaculis diam metus nec urna. Praesent urna velit, lobortis sit amet lorem sit amet, rhoncus convallis turpis.</p>
      <Gallery 
      image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} image6={image6}
      image1Large={image1Large}>
        
      </Gallery>
      <button className={styles.readmorebtn} onClick={()=>{setReadMore(!readMore)}}><h2>{btnName}</h2></button>
      {readMore && extraContent}
    </div>
    </div>
  );
}

export default Article2;