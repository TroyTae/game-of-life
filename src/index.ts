import { renderTitle, renderLife } from './renderer';

renderTitle('Still Life', 1);

import _15BentPaperclip from './life/still-life/15-bent-paperclip';
import _29BitStillLifeNo1 from './life/still-life/29-bit-still-life-no1';
import _31_4 from './life/still-life/31_4';
import AircraftCarrier from './life/still-life/aircraft-carrier';
import Amphisbaena from './life/still-life/amphisbaena';
import AriesBetwixtTwoBlocks from './life/still-life/aries-betwixt-two-blocks';
import AsymmetricAmphisbaena from './life/still-life/asymmetric-amphisbaena';
import Barge from './life/still-life/barge';
import BargeSiameseLoaf from './life/still-life/barge-siamese-loaf';
import BargeWithLongTail from './life/still-life/barge-with-long-tail';
import BargeWithVeryLongTail from './life/still-life/barge-with-very-long-tail';
import BeeHat from './life/still-life/bee-hat';
import Beehive from './life/still-life/beehive';
import BeehiveAtBeehive from './life/still-life/beehive-at-beehive';
import BeehiveAtClaw from './life/still-life/beehive-at-claw';
import BeehiveAtLoaf from './life/still-life/beehive-at-loaf';
import BeehiveOnCap from './life/still-life/beehive-on-cap';
import BeehiveOnDock from './life/still-life/beehive-on-dock';
import BeehiveOnTable from './life/still-life/beehive-on-table';
import BeehiveWithBendTail from './life/still-life/beehive-with-bend-tail';
import BeehiveWithNine from './life/still-life/beehive-with-nine';
import BeehiveWithTail from './life/still-life/beehive-with-tail';
import BiCap from './life/still-life/bi-cap';
import BiLoaf2 from './life/still-life/bi-loaf2';
import BiPond from './life/still-life/bi-pond';
import BigS from './life/still-life/big-s';
import Block from './life/still-life/block';
import BlockOnCap from './life/still-life/block-on-cap';
import BlockOnCover from './life/still-life/block-on-cover';
import BlockOnDock from './life/still-life/block-on-dock';
import BlockOnTable from './life/still-life/block-on-table';
import Boat from './life/still-life/boat';
import Loaf from './life/still-life/loaf';
renderTitle('Strict Still Life', 2);
[
  _15BentPaperclip,
  _29BitStillLifeNo1,
  _31_4,
  AircraftCarrier,
  Amphisbaena,
  AriesBetwixtTwoBlocks,
  AsymmetricAmphisbaena,
  Barge,
  BargeSiameseLoaf,
  BargeWithLongTail,
  BargeWithVeryLongTail,
  BeeHat,
  Beehive,
  BeehiveAtBeehive,
  BeehiveAtClaw,
  BeehiveAtLoaf,
  BeehiveOnCap,
  BeehiveOnDock,
  BeehiveOnTable,
  BeehiveWithBendTail,
  BeehiveWithNine,
  BeehiveWithTail,
  BiCap,
  BiLoaf2,
  BiPond,
  BigS,
  Block,
  BlockOnCap,
  BlockOnCover,
  BlockOnDock,
  BlockOnTable,
  Boat,
  Loaf,
].forEach(v => renderLife(v.title, v.life as Life[][]));

import BiBlock from './life/pseudo-still-life/bi-block';
import BiBoat from './life/pseudo-still-life/bi-boat';
import BlockOnBoat from './life/pseudo-still-life/block-on-boat';
renderTitle('Pseudo Still Life', 2);
[
  BiBlock,
  BiBoat,
  BlockOnBoat,
].forEach(v => renderLife(v.title, v.life as Life[][]));

// renderTitle('Quasi Still Life', 2);
// renderTitle('Enumerating Still Life', 2);

import Lighthouse from './life/oscillator/lighthouse';
import Toad from './life/oscillator/toad';
import Pulsar from './life/oscillator/pulsar';
renderTitle('Oscillator', 1);
[
  Lighthouse,
  Toad,
  Pulsar,
].forEach(v => renderLife(v.title, v.life as Life[][]));

import Blinker from './life/oscillator/blinker';
renderTitle('Muttering moat', 2);
[
  Blinker,
].forEach(v => renderLife(v.title, v.life as Life[][]));

import _7x9Eater from './life/eater/7x9-eater';
renderTitle('Eater', 1);
[
  _7x9Eater,
].forEach(v => renderLife(v.title, v.life as Life[][]));
