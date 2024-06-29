import "./style.css";
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  with: 800,
  height: 600,
  scene: {
    preload,
    create,
    update,
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

var game = new Phaser.Game(config);

function preload() {}

function create() {}

function update() {}
