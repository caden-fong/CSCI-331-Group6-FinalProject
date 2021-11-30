import React, { Component } from 'react';
import p1 from './../p1.jpg';
import p2 from './../p2.webp';
import p3 from './../p3.webp';
import p4 from './../p4.webp';
import p5 from './../p5.jpg';
import p6 from './../p6.webp';
import p7 from './../p7.png';
import p8 from './../p8.png';
import p9 from './../p9.png';
import './../App.css'

export default class More extends Component {
  constructor(props) {
    super(props);

  }

    render() {
    return (
      //     {/* <p>{this.props.user._id}</p> */}
      <>
        <div className="container-fluid morestuff">
          <p className="moretitle">Some of our Favorites</p>
          <div className="row">
            <div className="col- mor">
              <div className="card">
                <img src={p1} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Player's Handbook</h5>
                  <p className="card-text">(Dungeons & Dragons) by Wizards RPG Team</p>
                  <a href="https://www.amazon.com/Players-Handbook-Dungeons-Dragons-Wizards/dp/0786965606/ref=sxin_14_mbs_w_global_sims?crid=2HPWYNBEXLCB8&cv_ct_cx=d%26d+dm+guide&keywords=d%26d+dm+guide&pd_rd_i=0786965606&pd_rd_r=de1e04e6-e9e6-4ca7-8e4c-2001fcbe401f&pd_rd_w=ZIomk&pd_rd_wg=TJwSk&pf_rd_p=354b84dc-907e-4c5a-bfb4-ebf4bda98263&pf_rd_r=47PTZFX8ZKJZH18Z4GFV&qid=1638239557&sprefix=d%26d+dm%2Caps%2C401&sr=1-2-9e7645f9-2d19-4bff-863e-f6cdbe50f990" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
            <div className="col- mor">
              <div className="card">
                <img src={p2} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Dungeons & Dragons Monster Manual</h5>
                  <p className="card-text">(Core Rulebook, D&D Roleplaying Game)</p>
                  <a href="https://www.amazon.com/Dungeons-Dragons-Monster-Rulebook-Roleplaying/dp/0786965614/ref=sr_1_3?crid=2HPWYNBEXLCB8&keywords=d%26d+dm+guide&qid=1638239958&sprefix=d%26d+dm%2Caps%2C401&sr=8-3" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
            <div className="col- mor">
              <div className="card">
                <img src={p3} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Dungeons & Dragons Dungeon Master's Guide </h5>
                  <p className="card-text">(Core Rulebook, D&D Roleplaying Game)</p>
                  <a href="https://www.amazon.com/Dungeons-Dragons-Dungeon-Rulebook-Roleplaying/dp/0786965622/ref=sr_1_1?crid=2HPWYNBEXLCB8&keywords=d%26d+dm+guide&qid=1638239958&sprefix=d%26d+dm%2Caps%2C401&sr=8-1" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid morestuff">
          <div className="row">
            <div className="col- mor">
              <div className="card car">
                <img src={p4} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Curse of Strahd: Revamped Premium Edition</h5>
                  <p className="card-text">(D&D Boxed Set) (Dungeons & Dragons)</p>
                  <a href="https://www.amazon.com/Curse-Strahd-Revamped-Premium-Dungeons/dp/0786967153/ref=sr_1_13?crid=2HPWYNBEXLCB8&keywords=d%26d+dm+guide&qid=1638239958&sprefix=d%26d+dm%2Caps%2C401&sr=8-13" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
            <div className="col- mor">
              <div className="card car">
                <img src={p5} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Dungeons & Dragons Core Rulebooks Gift Set</h5>
                  <p className="card-text">(Special Foil Covers Edition with Slipcase, Player's Handbook, Dungeon Master's Guide, Monster Manual, DM Screen)</p>
                  <a href="https://www.amazon.com/Dungeons-Dragons-Rulebooks-Slipcase-Handbook/dp/0786966629/ref=sr_1_2?crid=2HPWYNBEXLCB8&keywords=d%26d+dm+guide&qid=1638239958&sprefix=d%26d+dm%2Caps%2C401&sr=8-2" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
            <div className="col- mor">
              <div className="card car">
                <img src={p6} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">Xanathar's Guide to Everything</h5>
                  <p className="card-text">(Dungeons & Dragons)</p>
                  <a href="https://www.amazon.com/Xanathars-Guide-Everything-Wizards-Team/dp/0786966114/ref=sxin_14_mbs_w_global_sims?crid=2HPWYNBEXLCB8&cv_ct_cx=d%26d+dm+guide&keywords=d%26d+dm+guide&pd_rd_i=0786966114&pd_rd_r=66b6a31e-bbb6-4ecb-9725-b584c04f2963&pd_rd_w=OO6nO&pd_rd_wg=sP7xU&pf_rd_p=354b84dc-907e-4c5a-bfb4-ebf4bda98263&pf_rd_r=P665J26RFSYCXTQK9RK2&qid=1638239958&sprefix=d%26d+dm%2Caps%2C401&sr=1-3-9e7645f9-2d19-4bff-863e-f6cdbe50f990" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid morestuff">
          <div className="row">
            <div className="col- mor">
              <div className="card car2">
                <img src={p7} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">D&D Dungeon Kit and DM's Guide</h5>
                  <p className="card-text"> </p>
                  <a href="https://www.amazon.com/Dungeon-Kit-DMs-Guide/dp/B0955CDWSW/ref=sr_1_6?crid=2HPWYNBEXLCB8&keywords=d%26d+dm+guide&qid=1638239958&sprefix=d%26d+dm%2Caps%2C401&sr=8-6" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
            <div className="col- mor">
              <div className="card car2">
                <img src={p8} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">DND Dice Set 25 x 7</h5>
                  <p className="card-text">(175 Pieces) Double-Colors Polyhedron Dice for Dungeons and Dragons DND RPG MTG Table Games D4 D6 D8 D10 D% D12 D20 25 Colors Dice with 1 Large Flannel Bag</p>
                  <a href="https://www.amazon.com/Double-Colors-Polyhedron-Dungeons-Dragons-Flannel/dp/B08VD4Q7XW/ref=sr_1_5?keywords=d%26d+dice&qid=1638240526&sr=8-5" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
            <div className="col- mor">
              <div className="card car2">
                <img src={p9} class="card-img-top" alt="dfjfsdf"/>
                <div className="card-body">
                  <h5 className="card-title">CiaraQ Polyhedral Dice Set</h5>
                  <p className="card-text">(35 Pieces) with Black Pouches, 5 Complete Double-Colors Dice Sets of D4 D6 D8 D10 D% D12 D20 Compatible with Dungeons and Dragons DND RPG MTG Table Games</p>
                  <a href="https://www.amazon.com/CiaraQ-Polyhedral-Double-Colors-Dungeons-Pathfinder/dp/B0794Z8XRP/ref=sr_1_omk_6?keywords=d%26d+dice&qid=1638240614&sr=8-6" class="btn btn-dark stretched-link">Shop Amazon</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>  
    )
  }
}