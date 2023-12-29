import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";

import Thumbnail from "../assets/blog100.jpg";

function PostDetail() {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">
              Edit
            </Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>

        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi
          exercitationem sit nulla ut illum tempora fugiat vero incidunt
          veritatis eos ipsam libero quibusdam ad hic error, totam laboriosam
          porro soluta dignissimos officiis praesentium iusto fugit! Obcaecati
          iure praesentium ullam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
          provident illo corporis iusto ad, tenetur neque praesentium, dolorem
          fuga atque beatae earum, repudiandae qui natus perspiciatis assumenda
          ex quos harum error delectus quae? Quisquam quasi eius modi dicta
          provident quidem? Ex officia cupiditate ea dolor assumenda. Eius
          itaque aperiam dolorem, impedit dolore officia quibusdam eos.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
          esse neque odit quibusdam ipsa consequatur excepturi ex eius suscipit.
          Fuga porro distinctio quis dignissimos! Facilis quo molestiae hic
          tempore iure earum animi omnis eligendi autem blanditiis, officiis
          reiciendis quaerat. Quam, accusantium? Cupiditate libero blanditiis
          dolores quod, repellat placeat quas, veritatis id minima natus
          suscipit nostrum odit possimus sit numquam culpa, provident esse
          maxime laborum fugit nihil autem error delectus molestiae? Recusandae
          vitae deleniti harum perspiciatis repellendus quaerat voluptatum
          expedita at reiciendis dolorem aspernatur ad animi cumque placeat
          asperiores ipsam, eos velit deserunt veniam ratione natus eligendi?
          Dolore laboriosam aut animi velit natus in suscipit, non laudantium
          odit at voluptatum cum est.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a
          excepturi nobis, assumenda quos impedit vero! Obcaecati quibusdam unde
          nemo!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
          obcaecati laborum non vel, commodi nulla libero corporis quas
          reiciendis incidunt est nesciunt. Odit corrupti fugit hic, rerum
          aliquid neque aperiam animi dolorum facilis quis, nesciunt quos atque
          quia excepturi eius, est esse quaerat ea dolore reprehenderit
          repudiandae. Consequuntur eius iure ratione enim ducimus recusandae
          explicabo! Eos ad magni veniam maiores et id, sint omnis ipsa quae
          totam, deleniti repellat ullam quidem quasi tenetur. Voluptatum unde
          vel eaque molestias eum in, nesciunt architecto aliquid itaque officia
          corporis facere tempore earum perferendis similique sapiente velit,
          tempora ducimus expedita, iste nulla quo delectus! Illo quidem
          deserunt est. Sapiente expedita asperiores impedit sunt natus ut.
          Beatae perferendis praesentium dolore et eum, accusamus quia sapiente
          ipsa magni? Quod minus voluptates iste in consequuntur recusandae quis
          deserunt! Consequuntur blanditiis ab dolorem illum, aliquam quaerat
          rerum deleniti fuga error quia cupiditate quae dignissimos? In dolor
          sint voluptatum cupiditate unde sed! Nulla dolor voluptate porro
          tenetur ipsam, nobis quia deleniti quo doloremque eos aut, ea minima
          fuga cumque commodi nihil temporibus corrupti iste a eligendi optio
          minus ratione sapiente? Voluptas eum, odit praesentium perspiciatis
          laudantium quibusdam rerum maxime amet ratione repellendus velit nobis
          tenetur, ipsum quos dolorem aperiam!
        </p>
      </div>
    </section>
  );
}

export default PostDetail;
