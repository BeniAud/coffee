import React, { Component } from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
              aliquid alias iste quibusdam sequi iusto eum dolores cum incidunt
              enim praesentium quidem fugiat neque qui beatae fugit, minus aut
              rerum voluptates porro veniam ipsa. Doloribus neque sed velit cum
              eligendi, nisi rem porro assumenda illum consectetur mollitia
              harum soluta dolores sint facilis doloremque iure rerum sequi
              laudantium placeat ratione. Amet ipsa veritatis, recusandae
              inventore qui quia accusamus quod dolorum sint soluta, ea, neque
              eveniet! Ad impedit eum velit expedita excepturi. Vitae similique
              delectus eveniet doloremque minima itaque et repellendus dolore
              dolores est, velit eum molestiae. Earum ratione minima architecto
              dignissimos.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
