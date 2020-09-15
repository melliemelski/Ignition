import React, { useState } from "react";
import styles from "./Article1.module.scss";


const Article1 = () => {
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
    <>
    <section className={styles.container}>
      <div className={styles.articletext}>
        <h2>Who are we?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed lacus nec odio bibendum dapibus eget ut urna. Donec <strong>venenatis tempus</strong> lectus et tempus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent fringilla dapibus magna, id vulputate nulla. Quisque nec felis lobortis, hendrerit dui vitae, aliquam nisl. Nam ut justo in neque elementum convallis. Curabitur placerat, felis quis tincidunt bibendum, nunc augue suscipit massa, ac iaculis diam metus nec urna. Praesent urna velit, lobortis sit amet lorem sit amet, rhoncus convallis turpis.</p>
          <p>Lorem ipsum dolor sit amet, consectetur <strong>adipisicing</strong> elit. Similique, libero ratione ipsa nesciunt sint et nihil cumque eligendi hic deleniti nam ad ipsam quidem animi culpa voluptas molestiae. Reprehenderit, aperiam?</p>
        <button className={styles.readmorebtn} onClick={()=>{setReadMore(!readMore)}}><h2>{btnName}</h2></button>
        {readMore && extraContent}
      </div>
    </section>
    </>
  );
}

export default Article1;