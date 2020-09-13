
import { h, render } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import Page from './page';

import _1_beacon from './life/oscillator/1-beacon.json';
import _101 from './life/oscillator/101.json';
import _110P62 from './life/oscillator/110P62.json';
import _112P15 from './life/oscillator/112P15.json';
import _117P18 from './life/oscillator/117P18.json';
import _124P21 from './life/oscillator/124P21.json';
import _128P10_2 from './life/oscillator/128P10_2.json';
import _134P25 from './life/oscillator/134P25.json';
import _134P39_1 from './life/oscillator/134P39_1.json';
import _144P24 from './life/oscillator/144P24.json';
import _145P20 from './life/oscillator/145P20.json';
import _14P2_3 from './life/oscillator/14P2_3.json';
import _14P2_4 from './life/oscillator/14P2_4.json';
import _168P22_1 from './life/oscillator/168P22_1.json';
import _186P24 from './life/oscillator/186P24.json';
import _209P8 from './life/oscillator/209P8.json';
import _20P2 from './life/oscillator/20P2.json';
import _21P2 from './life/oscillator/21P2.json';
import _22P2 from './life/oscillator/22P2.json';
import _22P36 from './life/oscillator/22P36.json';
import _230P8 from './life/oscillator/230P8.json';
import _23P2 from './life/oscillator/23P2.json';
import _24P10 from './life/oscillator/24P10.json';
import _24P2 from './life/oscillator/24P2.json';
import _258P3_on_achims_p11 from './life/oscillator/258P3-on-achims-p11.json';
import _258P3 from './life/oscillator/258P3.json';
import _26P2 from './life/oscillator/26P2.json';
import _28P7_1 from './life/oscillator/28P7_1.json';
import _28P7_2 from './life/oscillator/28P7_2.json';
import _28P7_3 from './life/oscillator/28P7_3.json';
import _30P6_1 from './life/oscillator/30P6_1.json';
import _33P3_1 from './life/oscillator/33P3_1.json';
import _35P12_1 from './life/oscillator/35P12_1.json';
import _37P10_1 from './life/oscillator/37P10_1.json';
import _37P7_1 from './life/oscillator/37P7_1.json';
import _38P7_2 from './life/oscillator/38P7_2.json';
import _41P7_2 from './life/oscillator/41P7_2.json';
import _44P12_3 from './life/oscillator/44P12_3.json';
import _44P7_2 from './life/oscillator/44P7_2.json';
import _48P22_1 from './life/oscillator/48P22_1.json';
import _49P88 from './life/oscillator/49P88.json';
import _50P35 from './life/oscillator/50P35.json';
import _53P13 from './life/oscillator/53P13.json';
import _55P10 from './life/oscillator/55P10.json';
import _56P27 from './life/oscillator/56P27.json';
import _5blink from './life/oscillator/5blink.json';
import _60P312 from './life/oscillator/60P312.json';
import _62P3_1 from './life/oscillator/62P3_1.json';
import _65P48 from './life/oscillator/65P48.json';
import _66P13 from './life/oscillator/66P13.json';
import _68P16 from './life/oscillator/68P16.json';
import _68P32_1 from './life/oscillator/68P32_1.json';
import _68P9 from './life/oscillator/68P9.json';
import _69P48 from './life/oscillator/69P48.json';
import _77P77 from './life/oscillator/77P77.json';
import _78P70 from './life/oscillator/78P70.json';
import _80P6 from './life/oscillator/80P6.json';
import _84P87 from './life/oscillator/84P87.json';
import _87P26 from './life/oscillator/87P26.json';
import _92P51 from './life/oscillator/92P51.json';
import _94P27_1 from './life/oscillator/94P27_1.json';
import _98P25 from './life/oscillator/98P25.json';
import _a_for_all from './life/oscillator/a-for-all.json';
import _achims_other_p16 from './life/oscillator/achims-other-p16.json';
import _achims_p11 from './life/oscillator/achims-p11.json';
import _achims_p144 from './life/oscillator/achims-p144.json';
import _achims_p16 from './life/oscillator/achims-p16.json';
import _achims_p4 from './life/oscillator/achims-p4.json';
import _achims_p8 from './life/oscillator/achims-p8.json';
import _almosymmetric from './life/oscillator/almosymmetric.json';
import _babbling_brook_1 from './life/oscillator/babbling-brook/babbling-brook-1.json';
import _beacon from './life/oscillator/babbling-brook/beacon.json';
import _four_boats from './life/oscillator/babbling-brook/four-boats.json';
import _great_on_off from './life/oscillator/babbling-brook/great-on-off.json';
import _light_bulb from './life/oscillator/babbling-brook/light-bulb.json';
import _bakers_dozen from './life/oscillator/bakers-dozen.json';
import _beacon_on_38P11_1 from './life/oscillator/beacon-on-38P11_1.json';
import _beacon_on_cover from './life/oscillator/beacon-on-cover.json';
import _beehive_on_long_hook_eating_tub from './life/oscillator/beehive-on-long-hook-eating-tub.json';
import _beehive_test_tube_baby from './life/oscillator/beehive-test-tube-baby.json';
import _beluchenkos_other_p37 from './life/oscillator/beluchenkos-other-p37.json';
import _beluchenkos_p13 from './life/oscillator/beluchenkos-p13.json';
import _beluchenkos_p37 from './life/oscillator/beluchenkos-p37.json';
import _beluchenkos_p40 from './life/oscillator/beluchenkos-p40.json';
import _beluchenkos_p51 from './life/oscillator/beluchenkos-p51.json';
import _bent_keys from './life/oscillator/bent-keys.json';
import _$rats from './life/oscillator/billiard-table/$rats.json';
import _1_2_3_4 from './life/oscillator/billiard-table/1-2-3-4.json';
import _1_2_3 from './life/oscillator/billiard-table/1-2-3.json';
import _123P27_1 from './life/oscillator/billiard-table/123P27_1.json';
import _29P9 from './life/oscillator/billiard-table/29P9.json';
import _38P11_1 from './life/oscillator/billiard-table/38P11_1.json';
import _42P10_3 from './life/oscillator/billiard-table/42P10_3.json';
import _44P14 from './life/oscillator/billiard-table/44P14.json';
import _54P17_1 from './life/oscillator/billiard-table/54P17_1.json';
import _a_verage from './life/oscillator/billiard-table/a-verage.json';
import _airforce from './life/oscillator/billiard-table/airforce.json';
import _boss from './life/oscillator/billiard-table/boss.json';
import _burloaferimeter from './life/oscillator/billiard-table/burloaferimeter.json';
import _cauldron from './life/oscillator/billiard-table/cauldron.json';
import _champagne_glass from './life/oscillator/billiard-table/champagne-glass.json';
import _chemist from './life/oscillator/billiard-table/chemist.json';
import _clock_2 from './life/oscillator/billiard-table/clock-2.json';
import _cousins from './life/oscillator/billiard-table/cousins.json';
import _crowd from './life/oscillator/billiard-table/crowd.json';
import _diamond_ring from './life/oscillator/billiard-table/diamond-ring.json';
import _en_retard from './life/oscillator/billiard-table/en-retard.json';
import _fore_and_back from './life/oscillator/billiard-table/fore-and-back.json';
import _frog_II from './life/oscillator/billiard-table/frog-II.json';
import _germ from './life/oscillator/billiard-table/germ.json';
import _hertz_oscillator from './life/oscillator/billiard-table/hertz-oscillator.json';
import _hustler_II from './life/oscillator/billiard-table/hustler-II.json';
import _hustler from './life/oscillator/billiard-table/hustler.json';
import _loading_dock from './life/oscillator/billiard-table/loading-dock.json';
import _mathematician from './life/oscillator/billiard-table/mathematician.json';
import _merzenichs_p18 from './life/oscillator/billiard-table/merzenichs-p18.json';
import _mini_pressure_cooker from './life/oscillator/billiard-table/mini-pressure-cooker.json';
import _negentropy from './life/oscillator/billiard-table/negentropy.json';
import _new_five from './life/oscillator/billiard-table/new-five.json';
import _biting_off_more_than_they_can_chew from './life/oscillator/biting-off-more-than-they-can-chew.json';
import _blinkers_bit_pole from './life/oscillator/blinkers-bit-pole.json';
import _blocked_p4_1 from './life/oscillator/blocked-p4-1.json';
import _blocked_p4_2 from './life/oscillator/blocked-p4-2.json';
import _blocked_p4_3 from './life/oscillator/blocked-p4-3.json';
import _blocked_p4_4 from './life/oscillator/blocked-p4-4.json';
import _blocked_p4_5 from './life/oscillator/blocked-p4-5.json';
import _blocker from './life/oscillator/blocker.json';
import _blonker_on_richs_p16 from './life/oscillator/blonker-on-richs-p16.json';
import _blonker from './life/oscillator/blonker.json';
import _boat_test_tube_baby from './life/oscillator/boat-test-tube-baby.json';
import _boat_tie_quadpole from './life/oscillator/boat-tie-quadpole.json';
import _boat_tie_spark_coil from './life/oscillator/boat-tie-spark-coil.json';
import _boring_p24 from './life/oscillator/boring-p24.json';
import _bottle from './life/oscillator/bottle.json';
import _buckinghams_p13 from './life/oscillator/buckinghams-p13.json';
import _candelabra from './life/oscillator/candelabra.json';
import _candlefrobra from './life/oscillator/candlefrobra.json';
import _caterer_on_28P7_3 from './life/oscillator/caterer-on-28P7_3.json';
import _caterer_on_42P7_1 from './life/oscillator/caterer-on-42P7_1.json';
import _caterer_on_44P7_2 from './life/oscillator/caterer-on-44P7_2.json';
import _caterer_on_68P32 from './life/oscillator/caterer-on-68P32.json';
import _caterer_on_beluchenkos_p13 from './life/oscillator/caterer-on-beluchenkos-p13.json';
import _caterer_on_figure_eight from './life/oscillator/caterer-on-figure-eight.json';
import _caterer_on_jasons_p22 from './life/oscillator/caterer-on-jasons-p22.json';
import _caterer_on_merzenichs_p31 from './life/oscillator/caterer-on-merzenichs-p31.json';
import _caterer_on_rattlesnake from './life/oscillator/caterer-on-rattlesnake.json';
import _caterer from './life/oscillator/caterer.json';
import _cis_beacon_down_on_long_hook from './life/oscillator/cis-beacon-down-on-long-hook.json';
import _cis_beacon_on_anvil from './life/oscillator/cis-beacon-on-anvil.json';
import _cis_beacon_on_cap from './life/oscillator/cis-beacon-on-cap.json';
import _cis_beacon_on_dock from './life/oscillator/cis-beacon-on-dock.json';
import _cis_beacon_on_table from './life/oscillator/cis-beacon-on-table.json';
import _cis_beacon_up_on_long_hook from './life/oscillator/cis-beacon-up-on-long-hook.json';
import _cis_boat_on_long_hook_eating_tub from './life/oscillator/cis-boat-on-long-hook-eating-tub.json';
import _claw_test_tube_baby from './life/oscillator/claw-test-tube-baby.json';
import _coes_p8 from './life/oscillator/coes-p8.json';
import _confused_eaters from './life/oscillator/confused-eaters.json';
import _cross_2 from './life/oscillator/cross-2.json';
import _cross from './life/oscillator/cross.json';
import _crown from './life/oscillator/crown.json';
import _david_hilbert from './life/oscillator/david-hilbert.json';
import _dinner_table from './life/oscillator/dinner-table.json';
import _double_caterer from './life/oscillator/double-caterer.json';
import _double_ewe from './life/oscillator/double-ewe.json';
import _dueling_banjos from './life/oscillator/dueling-banjos.json';
import _eater_block_frob from './life/oscillator/eater-block-frob.json';
import _eater_plug from './life/oscillator/eater-plug.json';
import _electric_fence from './life/oscillator/electric-fence.json';
import _elkies_p5 from './life/oscillator/elkies-p5.json';
import _ellison_p4_HW_emulator_hybrid from './life/oscillator/ellison-p4-HW-emulator-hybrid.json';
import _ellison_p4_HW_emulator from './life/oscillator/ellison-p4-HW-emulator.json';
import _extremely_impressive from './life/oscillator/extremely-impressive.json';
import _figure_eight_on_22P36 from './life/oscillator/figure-eight-on-22P36.json';
import _figure_eight_on_beluchenkos_p13 from './life/oscillator/figure-eight-on-beluchenkos-p13.json';
import _figure_eight_on_jasons_p22 from './life/oscillator/figure-eight-on-jasons-p22.json';
import _figure_eight_on_pentadecathlon from './life/oscillator/figure-eight-on-pentadecathlon.json';
import _figure_eight_on_rattlesnake from './life/oscillator/figure-eight-on-rattlesnake.json';
import _figure_eight from './life/oscillator/figure-eight.json';
import _fire_spitting from './life/oscillator/fire-spitting.json';
import _fountain from './life/oscillator/fountain.json';
import _four_eaters_hassling_four_bookends from './life/oscillator/four-eaters-hassling-four-bookends.json';
import _four_eaters_hassling_lumps_of_muck from './life/oscillator/four-eaters-hassling-lumps-of-muck.json';
import _four_molds_hassling_eight_blocks from './life/oscillator/four-molds-hassling-eight-blocks.json';
import _fox from './life/oscillator/fox.json';
import _french_kiss from './life/oscillator/french-kiss.json';
import _fumarole_on_34P14_shuttle from './life/oscillator/fumarole-on-34P14-shuttle.json';
import _fumarole_on_achims_p11 from './life/oscillator/fumarole-on-achims-p11.json';
import _fumarole_on_beluchenkos_p13 from './life/oscillator/fumarole-on-beluchenkos-p13.json';
import _fumarole_on_p18_bi_block_hassler from './life/oscillator/fumarole-on-p18-bi-block-hassler.json';
import _fumarole_on_richs_p16 from './life/oscillator/fumarole-on-richs-p16.json';
import _fumarole_on_robs_p16 from './life/oscillator/fumarole-on-robs-p16.json';
import _fumarole from './life/oscillator/fumarole.json';
import _gabriels_p138 from './life/oscillator/gabriels-p138.json';
import _glasses from './life/oscillator/glasses.json';
import _beehive_on_griddle from './life/oscillator/griddle/beehive-on-griddle.json';
import _block_on_griddle from './life/oscillator/griddle/block-on-griddle.json';
import _blocks_on_griddle from './life/oscillator/griddle/blocks-on-griddle.json';
import _boat_on_griddle from './life/oscillator/griddle/boat-on-griddle.json';
import _by_flops from './life/oscillator/griddle/by-flops.json';
import _griddle_and_dock from './life/oscillator/griddle/griddle-and-dock.json';
import _griddle_and_table from './life/oscillator/griddle/griddle-and-table.json';
import _harbor from './life/oscillator/harbor.json';
import _heart from './life/oscillator/heart.json';
import _heavyweight_emulator from './life/oscillator/heavyweight-emulator.json';
import _heavyweight_volcano from './life/oscillator/heavyweight-volcano.json';
import _hebdarole from './life/oscillator/hebdarole.json';
import _hive_test_tube_baby from './life/oscillator/hive-test-tube-baby.json';
import _honey_thieves_with_test_tube_baby from './life/oscillator/honey-thieves-with-test-tube-baby.json';
import _honey_thieves from './life/oscillator/honey-thieves.json';
import _hook_test_tube_baby from './life/oscillator/hook-test-tube-baby.json';
import _hooks from './life/oscillator/hooks.json';
import _jack from './life/oscillator/jack.json';
import _jam from './life/oscillator/jam.json';
import _jasons_p11 from './life/oscillator/jasons-p11.json';
import _jasons_p156 from './life/oscillator/jasons-p156.json';
import _jasons_p22 from './life/oscillator/jasons-p22.json';
import _jasons_p33 from './life/oscillator/jasons-p33.json';
import _jasons_p36 from './life/oscillator/jasons-p36.json';
import _jasons_p6 from './life/oscillator/jasons-p6.json';
import _jolson from './life/oscillator/jolson.json';
import _karels_p15 from './life/oscillator/karels-p15.json';
import _karels_p177 from './life/oscillator/karels-p177.json';
import _karels_p28 from './life/oscillator/karels-p28.json';
import _koks_galaxy from './life/oscillator/koks-galaxy.json';
import _laputa from './life/oscillator/laputa.json';
import _lei from './life/oscillator/lei.json';
import _light_speed_oscillator_1 from './life/oscillator/light-speed-oscillator-1.json';
import _light_speed_oscillator_2 from './life/oscillator/light-speed-oscillator-2.json';
import _light_speed_oscillator_3 from './life/oscillator/light-speed-oscillator-3.json';
import _lightweight_emulator from './life/oscillator/lightweight-emulator.json';
import _loaf_test_tube_baby from './life/oscillator/loaf-test-tube-baby.json';
import _loaflipflop from './life/oscillator/loaflipflop.json';
import _mangled_1_beacon from './life/oscillator/mangled-1-beacon.json';
import _mango_test_tube_baby from './life/oscillator/mango-test-tube-baby.json';
import _mazing from './life/oscillator/mazing.json';
import _merzenichs_p11 from './life/oscillator/merzenichs-p11.json';
import _merzenichs_p31 from './life/oscillator/merzenichs-p31.json';
import _merzenichs_p64 from './life/oscillator/merzenichs-p64.json';
import _middleweight_emulator from './life/oscillator/middleweight-emulator.json';
import _middleweight_volcano from './life/oscillator/middleweight-volcano.json';
import _mold_on_34P14_shuttle from './life/oscillator/mold-on-34P14-shuttle.json';
import _mold_on_41P7_2 from './life/oscillator/mold-on-41P7_2.json';
import _mold_on_fumarole from './life/oscillator/mold-on-fumarole.json';
import _mold_on_jasons_p22 from './life/oscillator/mold-on-jasons-p22.json';
import _mold_on_long_hook_eating_tub from './life/oscillator/mold-on-long-hook-eating-tub.json';
import _mold_on_merzenichs_p31 from './life/oscillator/mold-on-merzenichs-p31.json';
import _mold_on_pentadecathlon from './life/oscillator/mold-on-pentadecathlon.json';
import _mold_on_rattlesnake from './life/oscillator/mold-on-rattlesnake.json';
import _mold from './life/oscillator/mold.json';
import _monoclaw_test_tube_baby from './life/oscillator/monoclaw-test-tube-baby.json';
import _monogram from './life/oscillator/monogram.json';
import _montana from './life/oscillator/montana.json';
import _14P2_1 from './life/oscillator/muttering-moat/14P2_1.json';
import _bipole_tie_pseudo_barberpole from './life/oscillator/muttering-moat/bipole-tie-pseudo-barberpole.json';
import _bipole_tie_ship from './life/oscillator/muttering-moat/bipole-tie-ship.json';
import _bipole_tie_snake from './life/oscillator/muttering-moat/bipole-tie-snake.json';
import _bipole from './life/oscillator/muttering-moat/bipole.json';
import _blinker from './life/oscillator/muttering-moat/blinker.json';
import _boat_tie_bipole from './life/oscillator/muttering-moat/boat-tie-bipole.json';
import _boat_tie_tripole from './life/oscillator/muttering-moat/boat-tie-tripole.json';
import _carrier_tie_bipole from './life/oscillator/muttering-moat/carrier-tie-bipole.json';
import _cha_cha from './life/oscillator/muttering-moat/cha-cha.json';
import _circle_of_fire from './life/oscillator/muttering-moat/circle-of-fire.json';
import _clock from './life/oscillator/muttering-moat/clock.json';
import _cuphook from './life/oscillator/muttering-moat/cuphook.json';
import _cyclic from './life/oscillator/muttering-moat/cyclic.json';
import _decapole from './life/oscillator/muttering-moat/decapole.json';
import _duodecapole from './life/oscillator/muttering-moat/duodecapole.json';
import _gray_counter from './life/oscillator/muttering-moat/gray-counter.json';
import _heptapole from './life/oscillator/muttering-moat/heptapole.json';
import _hexapole from './life/oscillator/muttering-moat/hexapole.json';
import _muttering_moat_1 from './life/oscillator/muttering-moat/muttering-moat-1.json';
import _nonapole from './life/oscillator/muttering-moat/nonapole.json';
import _octapole from './life/oscillator/muttering-moat/octapole.json';
import _octagon_2 from './life/oscillator/octagon-2.json';
import _octagon_4 from './life/oscillator/octagon-4.json';
import _odd_keys from './life/oscillator/odd-keys.json';
import _odd_test_tube_baby from './life/oscillator/odd-test-tube-baby.json';
import _overweight_emulator from './life/oscillator/overweight-emulator.json';
import _pulsar from './life/oscillator/pulsar.json';
import _106P135 from './life/oscillator/relay/106P135.json';
import _6_bits from './life/oscillator/relay/6-bits.json';
import _double_x from './life/oscillator/relay/double-x.json';
import _hectic from './life/oscillator/relay/hectic.json';
import _metamorphosis_II from './life/oscillator/relay/metamorphosis-II.json';
import _34P14_shuttle from './life/oscillator/shuttle/34P14-shuttle.json';
import _carnival_shuttle from './life/oscillator/shuttle/carnival-shuttle.json';
import _centinal from './life/oscillator/shuttle/centinal.json';
import _diuresis from './life/oscillator/shuttle/diuresis.json';
import _eureka from './life/oscillator/shuttle/eureka.json';
import _gourmet from './life/oscillator/shuttle/gourmet.json';
import _newshuttle from './life/oscillator/shuttle/newshuttle.json';
import _blocked_p4_t_nose_hybrid from './life/oscillator/t-nose/blocked-p4-t-nose-hybrid.json';
import _blocked_p4_t_nose from './life/oscillator/t-nose/blocked-p4-t-nose.json';
import _toad from './life/oscillator/toad.json';
import _7x9_eater from './life/still-life/eater/7x9-eater.json';
import _century_eater from './life/still-life/eater/century-eater.json';
import _eater_1 from './life/still-life/eater/eater-1.json';
import _eater_2 from './life/still-life/eater/eater-2.json';
import _eater_3 from './life/still-life/eater/eater-3.json';
import _eater_4 from './life/still-life/eater/eater-4.json';
import _sidesnagger from './life/still-life/eater/sidesnagger.json';
import _tub_with_tail_eater from './life/still-life/eater/tub-with-tail-eater.json';
import _bi_block from './life/still-life/pseudo-still-life/bi-block.json';
import _bi_boat from './life/still-life/pseudo-still-life/bi-boat.json';
import _block_on_boat from './life/still-life/pseudo-still-life/block-on-boat.json';
import _pond_on_pond from './life/still-life/pseudo-still-life/pond-on-pond.json';
import _quad_pseudo_still_life from './life/still-life/pseudo-still-life/quad-pseudo-still-life.json';
import _triple_pseudo_still_life from './life/still-life/pseudo-still-life/triple-pseudo-still-life.json';
import _15_bent_paperclip from './life/still-life/strict-still-life/15-bent-paperclip.json';
import _29_bit_still_life_no1 from './life/still-life/strict-still-life/29-bit-still-life-no1.json';
import _31_4 from './life/still-life/strict-still-life/31_4.json';
import _aircraft_carrier from './life/still-life/strict-still-life/aircraft-carrier.json';
import _amphisbaena from './life/still-life/strict-still-life/amphisbaena.json';
import _aries_betwixt_two_blocks from './life/still-life/strict-still-life/aries-betwixt-two-blocks.json';
import _asymmetric_amphisbaena from './life/still-life/strict-still-life/asymmetric-amphisbaena.json';
import _barge_siamese_loaf from './life/still-life/strict-still-life/barge-siamese-loaf.json';
import _barge_with_long_tail from './life/still-life/strict-still-life/barge-with-long-tail.json';
import _barge_with_very_long_tail from './life/still-life/strict-still-life/barge-with-very-long-tail.json';
import _barge from './life/still-life/strict-still-life/barge.json';
import _bee_hat from './life/still-life/strict-still-life/bee-hat.json';
import _beehive_at_beehive from './life/still-life/strict-still-life/beehive-at-beehive.json';
import _beehive_at_claw from './life/still-life/strict-still-life/beehive-at-claw.json';
import _beehive_at_loaf from './life/still-life/strict-still-life/beehive-at-loaf.json';
import _beehive_on_cap from './life/still-life/strict-still-life/beehive-on-cap.json';
import _beehive_on_dock from './life/still-life/strict-still-life/beehive-on-dock.json';
import _beehive_on_table from './life/still-life/strict-still-life/beehive-on-table.json';
import _beehive_with_bend_tail from './life/still-life/strict-still-life/beehive-with-bend-tail.json';
import _beehive_with_nine from './life/still-life/strict-still-life/beehive-with-nine.json';
import _beehive_with_tail from './life/still-life/strict-still-life/beehive-with-tail.json';
import _beehive from './life/still-life/strict-still-life/beehive.json';
import _bi_cap from './life/still-life/strict-still-life/bi-cap.json';
import _bi_loaf2 from './life/still-life/strict-still-life/bi-loaf2.json';
import _bi_pond from './life/still-life/strict-still-life/bi-pond.json';
import _big_s from './life/still-life/strict-still-life/big-s.json';
import _block_on_cap from './life/still-life/strict-still-life/block-on-cap.json';
import _block_on_cover from './life/still-life/strict-still-life/block-on-cover.json';
import _block_on_dock from './life/still-life/strict-still-life/block-on-dock.json';
import _block_on_table from './life/still-life/strict-still-life/block-on-table.json';
import _block from './life/still-life/strict-still-life/block.json';
import _boat_tie_eater_head from './life/still-life/strict-still-life/boat-tie-eater-head.json';
import _boat_tie_eater_tail from './life/still-life/strict-still-life/boat-tie-eater-tail.json';
import _boat_tie_long_boat from './life/still-life/strict-still-life/boat-tie-long-boat.json';
import _boat_tie_long_snake from './life/still-life/strict-still-life/boat-tie-long-snake.json';
import _boat_tie_ship from './life/still-life/strict-still-life/boat-tie-ship.json';
import _boat_tie_snake from './life/still-life/strict-still-life/boat-tie-snake.json';
import _boat_tie from './life/still-life/strict-still-life/boat-tie.json';
import _boat_with_cis_tail from './life/still-life/strict-still-life/boat-with-cis-tail.json';
import _boat_with_hooked_tail from './life/still-life/strict-still-life/boat-with-hooked-tail.json';
import _boat_with_long_tail from './life/still-life/strict-still-life/boat-with-long-tail.json';
import _boat_with_long3_tail from './life/still-life/strict-still-life/boat-with-long3-tail.json';
import _boat_with_very_long_tail from './life/still-life/strict-still-life/boat-with-very-long-tail.json';
import _boat from './life/still-life/strict-still-life/boat.json';
import _bookend_table_snake from './life/still-life/strict-still-life/bookend-table-snake.json';
import _bookends_siamese_tables from './life/still-life/strict-still-life/bookends-siamese-tables.json';
import _bookends from './life/still-life/strict-still-life/bookends.json';
import _broken_elevener from './life/still-life/strict-still-life/broken-elevener.json';
import _broken_snake from './life/still-life/strict-still-life/broken-snake.json';
import _canoe_siamese_snake from './life/still-life/strict-still-life/canoe-siamese-snake.json';
import _canoe from './life/still-life/strict-still-life/canoe.json';
import _cap_and_dock from './life/still-life/strict-still-life/cap-and-dock.json';
import _carrier_bridge_carrier from './life/still-life/strict-still-life/carrier-bridge-carrier.json';
import _carrier_bridge_snake from './life/still-life/strict-still-life/carrier-bridge-snake.json';
import _carrier_bridge_table from './life/still-life/strict-still-life/carrier-bridge-table.json';
import _carrier_siamese_canoe from './life/still-life/strict-still-life/carrier-siamese-canoe.json';
import _carrier_siamese_carrier from './life/still-life/strict-still-life/carrier-siamese-carrier.json';
import _carrier_siamese_dock from './life/still-life/strict-still-life/carrier-siamese-dock.json';
import _carrier_siamese_eater_head from './life/still-life/strict-still-life/carrier-siamese-eater-head.json';
import _carrier_siamese_eater_tail from './life/still-life/strict-still-life/carrier-siamese-eater-tail.json';
import _carrier_siamese_hook_with_tail_hook from './life/still-life/strict-still-life/carrier-siamese-hook-with-tail-hook.json';
import _carrier_siamese_hook_with_tail_tail from './life/still-life/strict-still-life/carrier-siamese-hook-with-tail-tail.json';
import _carrier_siamese_long_snake from './life/still-life/strict-still-life/carrier-siamese-long-snake.json';
import _carrier_siamese_shillelagh from './life/still-life/strict-still-life/carrier-siamese-shillelagh.json';
import _carrier_siamese_tub_with_tail from './life/still-life/strict-still-life/carrier-siamese-tub-with-tail.json';
import _carrier_siamese_very_long_snake from './life/still-life/strict-still-life/carrier-siamese-very-long-snake.json';
import _carrier_tie_boat from './life/still-life/strict-still-life/carrier-tie-boat.json';
import _carrier_tie_ship from './life/still-life/strict-still-life/carrier-tie-ship.json';
import _carrier_with_feather from './life/still-life/strict-still-life/carrier-with-feather.json';
import _cis_barge_with_nine from './life/still-life/strict-still-life/cis-barge-with-nine.json';
import _cis_barge_with_tail from './life/still-life/strict-still-life/cis-barge-with-tail.json';
import _cis_block_on_long_hook from './life/still-life/strict-still-life/cis-block-on-long-hook.json';
import _cis_boat_amphisbaena from './life/still-life/strict-still-life/cis-boat-amphisbaena.json';
import _cis_boat_and_cap from './life/still-life/strict-still-life/cis-boat-and-cap.json';
import _cis_boat_line_tub from './life/still-life/strict-still-life/cis-boat-line-tub.json';
import _cis_boat_on_dock from './life/still-life/strict-still-life/cis-boat-on-dock.json';
import _cis_boat_on_table from './life/still-life/strict-still-life/cis-boat-on-table.json';
import _cis_boat_with_nine from './life/still-life/strict-still-life/cis-boat-with-nine.json';
import _cis_boat_with_tail from './life/still-life/strict-still-life/cis-boat-with-tail.json';
import _cis_carrier_down_on_table from './life/still-life/strict-still-life/cis-carrier-down-on-table.json';
import _cis_carrier_tie_snake from './life/still-life/strict-still-life/cis-carrier-tie-snake.json';
import _cis_carrier_tie from './life/still-life/strict-still-life/cis-carrier-tie.json';
import _cis_carrier_up_on_table from './life/still-life/strict-still-life/cis-carrier-up-on-table.json';
import _cis_fuse_with_two_tails from './life/still-life/strict-still-life/cis-fuse-with-two-tails.json';
import _cis_hook_and_R_bee from './life/still-life/strict-still-life/cis-hook-and-R-bee.json';
import _cis_hook_with_tail from './life/still-life/strict-still-life/cis-hook-with-tail.json';
import _cis_loaf_with_tail from './life/still-life/strict-still-life/cis-loaf-with-tail.json';
import _cis_long_barge_with_tail from './life/still-life/strict-still-life/cis-long-barge-with-tail.json';
import _cis_long_boat_with_tail from './life/still-life/strict-still-life/cis-long-boat-with-tail.json';
import _cis_mango_with_tail from './life/still-life/strict-still-life/cis-mango-with-tail.json';
import _cis_mirrored_R_bee from './life/still-life/strict-still-life/cis-mirrored-R-bee.json';
import _cis_mirrored_worm_siamese_cis_mirrored_worm from './life/still-life/strict-still-life/cis-mirrored-worm-siamese-cis-mirrored-worm.json';
import _cis_mirrored_worm from './life/still-life/strict-still-life/cis-mirrored-worm.json';
import _cis_R_bee_and_R_loaf from './life/still-life/strict-still-life/cis-R-bee-and-R-loaf.json';
import _cis_rotated_hook from './life/still-life/strict-still-life/cis-rotated-hook.json';
import _cis_rotated_R_bee from './life/still-life/strict-still-life/cis-rotated-R-bee.json';
import _cis_shillelagh from './life/still-life/strict-still-life/cis-shillelagh.json';
import _cis_ship_on_table from './life/still-life/strict-still-life/cis-ship-on-table.json';
import _cis_snake_tie from './life/still-life/strict-still-life/cis-snake-tie.json';
import _claw_siamese_tub_with_cape from './life/still-life/strict-still-life/claw-siamese-tub-with-cape.json';
import _claw_with_boat_with_tail from './life/still-life/strict-still-life/claw-with-boat-with-tail.json';
import _claw_with_tail from './life/still-life/strict-still-life/claw-with-tail.json';
import _claw_with_tub_with_tail from './life/still-life/strict-still-life/claw-with-tub-with-tail.json';
import _clips from './life/still-life/strict-still-life/clips.json';
import _cloverleaf_interchange from './life/still-life/strict-still-life/cloverleaf-interchange.json';
import _cthulhu from './life/still-life/strict-still-life/cthulhu.json';
import _dead_spark_coil from './life/still-life/strict-still-life/dead-spark-coil.json';
import _dock_and_long_hook from './life/still-life/strict-still-life/dock-and-long-hook.json';
import _double_claw from './life/still-life/strict-still-life/double-claw.json';
import _down_snake_on_table from './life/still-life/strict-still-life/down-snake-on-table.json';
import _eater_bridge_eater from './life/still-life/strict-still-life/eater-bridge-eater.json';
import _eater_head_siamese_eater_head from './life/still-life/strict-still-life/eater-head-siamese-eater-head.json';
import _eater_head_siamese_eater_tail from './life/still-life/strict-still-life/eater-head-siamese-eater-tail.json';
import _eater_head_siamese_long_snake from './life/still-life/strict-still-life/eater-head-siamese-long-snake.json';
import _eater_head_siamese_snake from './life/still-life/strict-still-life/eater-head-siamese-snake.json';
import _eater_tail_siamese_eater_tail from './life/still-life/strict-still-life/eater-tail-siamese-eater-tail.json';
import _eater_tail_siamese_long_snake from './life/still-life/strict-still-life/eater-tail-siamese-long-snake.json';
import _eater_tail_siamese_snake from './life/still-life/strict-still-life/eater-tail-siamese-snake.json';
import _eater_with_cape from './life/still-life/strict-still-life/eater-with-cape.json';
import _eater_with_head_feather from './life/still-life/strict-still-life/eater-with-head-feather.json';
import _eater_with_tail_feather from './life/still-life/strict-still-life/eater-with-tail-feather.json';
import _egyptian_walk from './life/still-life/strict-still-life/egyptian-walk.json';
import _eleven_loop from './life/still-life/strict-still-life/eleven-loop.json';
import _elevener from './life/still-life/strict-still-life/elevener.json';
import _fourteener from './life/still-life/strict-still-life/fourteener.json';
import _fuse_with_tail_and_integral from './life/still-life/strict-still-life/fuse-with-tail-and-integral.json';
import _fuse_with_tail_and_long_tail from './life/still-life/strict-still-life/fuse-with-tail-and-long-tail.json';
import _fuse_with_tail_and_very_long_tail from './life/still-life/strict-still-life/fuse-with-tail-and-very-long-tail.json';
import _fuse_with_two_long_tails from './life/still-life/strict-still-life/fuse-with-two-long-tails.json';
import _grin_reagent from './life/still-life/strict-still-life/grin-reagent.json';
import _gull_with_tub from './life/still-life/strict-still-life/gull-with-tub.json';
import _half_bakery from './life/still-life/strict-still-life/half-bakery.json';
import _hat_siamese_vase from './life/still-life/strict-still-life/hat-siamese-vase.json';
import _hat from './life/still-life/strict-still-life/hat.json';
import _hexagonal_key from './life/still-life/strict-still-life/hexagonal-key.json';
import _honeybarge from './life/still-life/strict-still-life/honeybarge.json';
import _honeycomb from './life/still-life/strict-still-life/honeycomb.json';
import _hook_with_nine from './life/still-life/strict-still-life/hook-with-nine.json';
import _hook_with_tail_hook_siamese_snake from './life/still-life/strict-still-life/hook-with-tail-hook-siamese-snake.json';
import _hook_with_tail_tail_siamese_snake from './life/still-life/strict-still-life/hook-with-tail-tail-siamese-snake.json';
import _hook_with_tail_with_cape from './life/still-life/strict-still-life/hook-with-tail-with-cape.json';
import _hook_with_tail from './life/still-life/strict-still-life/hook-with-tail.json';
import _hook_with_two_tails from './life/still-life/strict-still-life/hook-with-two-tails.json';
import _house_on_house_siamese_table_on_table_weld_hat_siamese_hat from './life/still-life/strict-still-life/house-on-house-siamese-table-on-table-weld-hat-siamese-hat.json';
import _hungry_hat from './life/still-life/strict-still-life/hungry-hat.json';
import _inflected_clips from './life/still-life/strict-still-life/inflected-clips.json';
import _inflected_long_snake from './life/still-life/strict-still-life/inflected-long-snake.json';
import _inflexion from './life/still-life/strict-still-life/inflexion.json';
import _integral_sign from './life/still-life/strict-still-life/integral-sign.json';
import _integral_with_cis_hook from './life/still-life/strict-still-life/integral-with-cis-hook.json';
import _integral_with_hook_and_tail from './life/still-life/strict-still-life/integral-with-hook-and-tail.json';
import _integral_with_hook from './life/still-life/strict-still-life/integral-with-hook.json';
import _integral_with_long_hook_and_tub from './life/still-life/strict-still-life/integral-with-long-hook-and-tub.json';
import _integral_with_long_hook from './life/still-life/strict-still-life/integral-with-long-hook.json';
import _integral_with_tub_and_hook from './life/still-life/strict-still-life/integral-with-tub-and-hook.json';
import _integral_with_tub_and_tail from './life/still-life/strict-still-life/integral-with-tub-and-tail.json';
import _integral_with_tub from './life/still-life/strict-still-life/integral-with-tub.json';
import _integral_with_two_tubs from './life/still-life/strict-still-life/integral-with-two-tubs.json';
import _integral_with_very_long_hook from './life/still-life/strict-still-life/integral-with-very-long-hook.json';
import _inverted_double_claw from './life/still-life/strict-still-life/inverted-double-claw.json';
import _lake2 from './life/still-life/strict-still-life/lake2.json';
import _loaf_back_tie_loaf from './life/still-life/strict-still-life/loaf-back-tie-loaf.json';
import _loaf_siamese_loaf from './life/still-life/strict-still-life/loaf-siamese-loaf.json';
import _loaf_tie_eater_with_tail from './life/still-life/strict-still-life/loaf-tie-eater-with-tail.json';
import _loaf from './life/still-life/strict-still-life/loaf.json';
import _long_barge from './life/still-life/strict-still-life/long-barge.json';
import _long_boat_tie_ship from './life/still-life/strict-still-life/long-boat-tie-ship.json';
import _long_boat_with_long_tail from './life/still-life/strict-still-life/long-boat-with-long-tail.json';
import _long_boat from './life/still-life/strict-still-life/long-boat.json';
import _long_canoe from './life/still-life/strict-still-life/long-canoe.json';
import _long_cis_hook_with_tail from './life/still-life/strict-still-life/long-cis-hook-with-tail.json';
import _long_cis_shillelagh from './life/still-life/strict-still-life/long-cis-shillelagh.json';
import _long_claw_with_tail from './life/still-life/strict-still-life/long-claw-with-tail.json';
import _long_hook_with_tail from './life/still-life/strict-still-life/long-hook-with-tail.json';
import _long_integral_with_boat from './life/still-life/strict-still-life/long-integral-with-boat.json';
import _long_integral from './life/still-life/strict-still-life/long-integral.json';
import _long_melusine from './life/still-life/strict-still-life/long-melusine.json';
import _long_prodigal from './life/still-life/strict-still-life/long-prodigal.json';
import _long_shillelagh from './life/still-life/strict-still-life/long-shillelagh.json';
import _long_ship from './life/still-life/strict-still-life/long-ship.json';
import _long_snake_siamese_long_snake from './life/still-life/strict-still-life/long-snake-siamese-long-snake.json';
import _long_snake from './life/still-life/strict-still-life/long-snake.json';
import _long_tub_claw_with_tail from './life/still-life/strict-still-life/long-tub-claw-with-tail.json';
import _long10_boat from './life/still-life/strict-still-life/long10-boat.json';
import _long10_ship from './life/still-life/strict-still-life/long10-ship.json';
import _long3_barge from './life/still-life/strict-still-life/long3-barge.json';
import _long3_boat from './life/still-life/strict-still-life/long3-boat.json';
import _long3_canoe from './life/still-life/strict-still-life/long3-canoe.json';
import _long3_hook_with_tail from './life/still-life/strict-still-life/long3-hook-with-tail.json';
import _long3_integral from './life/still-life/strict-still-life/long3-integral.json';
import _long3_shillelagh from './life/still-life/strict-still-life/long3-shillelagh.json';
import _long3_ship from './life/still-life/strict-still-life/long3-ship.json';
import _long3_snake from './life/still-life/strict-still-life/long3-snake.json';
import _long4_barge from './life/still-life/strict-still-life/long4-barge.json';
import _long4_boat from './life/still-life/strict-still-life/long4-boat.json';
import _long4_canoe from './life/still-life/strict-still-life/long4-canoe.json';
import _long4_hook_with_tail from './life/still-life/strict-still-life/long4-hook-with-tail.json';
import _long4_shillelagh from './life/still-life/strict-still-life/long4-shillelagh.json';
import _long4_ship from './life/still-life/strict-still-life/long4-ship.json';
import _long4_snake from './life/still-life/strict-still-life/long4-snake.json';
import _long5_barge from './life/still-life/strict-still-life/long5-barge.json';
import _long5_boat from './life/still-life/strict-still-life/long5-boat.json';
import _long5_ship from './life/still-life/strict-still-life/long5-ship.json';
import _long5_snake from './life/still-life/strict-still-life/long5-snake.json';
import _long6_barge from './life/still-life/strict-still-life/long6-barge.json';
import _long6_boat from './life/still-life/strict-still-life/long6-boat.json';
import _long6_ship from './life/still-life/strict-still-life/long6-ship.json';
import _long6_snake from './life/still-life/strict-still-life/long6-snake.json';
import _long7_boat from './life/still-life/strict-still-life/long7-boat.json';
import _long7_ship from './life/still-life/strict-still-life/long7-ship.json';
import _long8_boat from './life/still-life/strict-still-life/long8-boat.json';
import _long8_ship from './life/still-life/strict-still-life/long8-ship.json';
import _long9_boat from './life/still-life/strict-still-life/long9-boat.json';
import _long9_ship from './life/still-life/strict-still-life/long9-ship.json';
import _longhorn from './life/still-life/strict-still-life/longhorn.json';
import _loop from './life/still-life/strict-still-life/loop.json';
import _mango_with_block_on_dock from './life/still-life/strict-still-life/mango-with-block-on-dock.json';
import _mango from './life/still-life/strict-still-life/mango.json';
import _mickey_mouse from './life/still-life/strict-still-life/mickey-mouse.json';
import _mirrored_dock from './life/still-life/strict-still-life/mirrored-dock.json';
import _moose_antlers from './life/still-life/strict-still-life/moose-antlers.json';
import _o_quad_loaf from './life/still-life/strict-still-life/o-quad-loaf.json';
import _omnibus_with_tubs from './life/still-life/strict-still-life/omnibus-with-tubs.json';
import _omnibus from './life/still-life/strict-still-life/omnibus.json';
import _ortho_loaf_on_table from './life/still-life/strict-still-life/ortho-loaf-on-table.json';
import _paperclip from './life/still-life/strict-still-life/paperclip.json';
import _pond_on_dock from './life/still-life/strict-still-life/pond-on-dock.json';
import _pond from './life/still-life/strict-still-life/pond.json';
import _professor from './life/still-life/strict-still-life/professor.json';
import _python_siamese_snake from './life/still-life/strict-still-life/python-siamese-snake.json';
import _R_bee_and_snake from './life/still-life/strict-still-life/R-bee-and-snake.json';
import _R_bee_on_beehive from './life/still-life/strict-still-life/R-bee-on-beehive.json';
import _R_bee_with_feather from './life/still-life/strict-still-life/R-bee-with-feather.json';
import _R_mango_and_house from './life/still-life/strict-still-life/R-mango-and-house.json';
import _rotated_c from './life/still-life/strict-still-life/rotated-c.json';
import _rotated_table from './life/still-life/strict-still-life/rotated-table.json';
import _scorpion from './life/still-life/strict-still-life/scorpion.json';
import _sesquihat from './life/still-life/strict-still-life/sesquihat.json';
import _shillelagh_siamese_snake from './life/still-life/strict-still-life/shillelagh-siamese-snake.json';
import _shillelagh from './life/still-life/strict-still-life/shillelagh.json';
import _ship_tie_snake from './life/still-life/strict-still-life/ship-tie-snake.json';
import _ship_tie from './life/still-life/strict-still-life/ship-tie.json';
import _ship from './life/still-life/strict-still-life/ship.json';
import _shuriken from './life/still-life/strict-still-life/shuriken.json';
import _sidewalk from './life/still-life/strict-still-life/sidewalk.json';
import _skew_R_bees from './life/still-life/strict-still-life/skew-R-bees.json';
import _small_lake from './life/still-life/strict-still-life/small-lake.json';
import _snake_bridge_snake from './life/still-life/strict-still-life/snake-bridge-snake.json';
import _snake_siamese_snake from './life/still-life/strict-still-life/snake-siamese-snake.json';
import _snake_siamese_very_long_snake from './life/still-life/strict-still-life/snake-siamese-very-long-snake.json';
import _snake_with_feather from './life/still-life/strict-still-life/snake-with-feather.json';
import _snake from './life/still-life/strict-still-life/snake.json';
import _snorkel_loop from './life/still-life/strict-still-life/snorkel-loop.json';
import _spiral from './life/still-life/strict-still-life/spiral.json';
import _super_loaf from './life/still-life/strict-still-life/super-loaf.json';
import _super_mango from './life/still-life/strict-still-life/super-mango.json';
import _super_pond from './life/still-life/strict-still-life/super-pond.json';
import _symmetric_scorpion from './life/still-life/strict-still-life/symmetric-scorpion.json';
import _symmetrical_synapse from './life/still-life/strict-still-life/symmetrical-synapse.json';
import _table_and_dock from './life/still-life/strict-still-life/table-and-dock.json';
import _table_and_table from './life/still-life/strict-still-life/table-and-table.json';
import _teardrop_with_cape from './life/still-life/strict-still-life/teardrop-with-cape.json';
import _teardrop_with_claw from './life/still-life/strict-still-life/teardrop-with-claw.json';
import _thirteen_loop from './life/still-life/strict-still-life/thirteen-loop.json';
import _trans_barge_with_nine from './life/still-life/strict-still-life/trans-barge-with-nine.json';
import _trans_barge_with_tail from './life/still-life/strict-still-life/trans-barge-with-tail.json';
import _trans_block_on_long_hook from './life/still-life/strict-still-life/trans-block-on-long-hook.json';
import _trans_boat_amphisbaena from './life/still-life/strict-still-life/trans-boat-amphisbaena.json';
import _trans_boat_line_tub from './life/still-life/strict-still-life/trans-boat-line-tub.json';
import _trans_boat_on_dock from './life/still-life/strict-still-life/trans-boat-on-dock.json';
import _trans_boat_on_table from './life/still-life/strict-still-life/trans-boat-on-table.json';
import _trans_boat_with_nine from './life/still-life/strict-still-life/trans-boat-with-nine.json';
import _trans_boat_with_tail from './life/still-life/strict-still-life/trans-boat-with-tail.json';
import _trans_carrier_down_on_table from './life/still-life/strict-still-life/trans-carrier-down-on-table.json';
import _trans_carrier_tie_snake from './life/still-life/strict-still-life/trans-carrier-tie-snake.json';
import _trans_carrier_tie from './life/still-life/strict-still-life/trans-carrier-tie.json';
import _trans_carrier_up_on_table from './life/still-life/strict-still-life/trans-carrier-up-on-table.json';
import _trans_fuse_with_two_tails from './life/still-life/strict-still-life/trans-fuse-with-two-tails.json';
import _trans_hook_and_R_bee from './life/still-life/strict-still-life/trans-hook-and-R-bee.json';
import _trans_loaf_with_tail from './life/still-life/strict-still-life/trans-loaf-with-tail.json';
import _trans_long_barge_with_tail from './life/still-life/strict-still-life/trans-long-barge-with-tail.json';
import _trans_long_boat_with_tail from './life/still-life/strict-still-life/trans-long-boat-with-tail.json';
import _trans_mango_with_tail from './life/still-life/strict-still-life/trans-mango-with-tail.json';
import _trans_mirrored_R_bee from './life/still-life/strict-still-life/trans-mirrored-R-bee.json';
import _trans_R_bee_and_R_loaf from './life/still-life/strict-still-life/trans-R-bee-and-R-loaf.json';
import _trans_rotated_R_bee from './life/still-life/strict-still-life/trans-rotated-R-bee.json';
import _trans_ship_on_table from './life/still-life/strict-still-life/trans-ship-on-table.json';
import _trans_snake_tie from './life/still-life/strict-still-life/trans-snake-tie.json';
import _tub_bend_line_tub from './life/still-life/strict-still-life/tub-bend-line-tub.json';
import _tub_with_cis_tail from './life/still-life/strict-still-life/tub-with-cis-tail.json';
import _tub_with_long_cis_tail from './life/still-life/strict-still-life/tub-with-long-cis-tail.json';
import _tub_with_long_tail from './life/still-life/strict-still-life/tub-with-long-tail.json';
import _tub_with_long3_tail from './life/still-life/strict-still-life/tub-with-long3-tail.json';
import _tub_with_long4_tail from './life/still-life/strict-still-life/tub-with-long4-tail.json';
import _tub_with_tail_siamese_snake from './life/still-life/strict-still-life/tub-with-tail-siamese-snake.json';
import _tub_with_tail_with_cape from './life/still-life/strict-still-life/tub-with-tail-with-cape.json';
import _tub_with_tail from './life/still-life/strict-still-life/tub-with-tail.json';
import _tub_with_two_down_cis_tails from './life/still-life/strict-still-life/tub-with-two-down-cis-tails.json';
import _tub_with_two_down_trans_tails from './life/still-life/strict-still-life/tub-with-two-down-trans-tails.json';
import _tub_with_two_up_cis_tails from './life/still-life/strict-still-life/tub-with-two-up-cis-tails.json';
import _tub_with_two_up_trans_tails from './life/still-life/strict-still-life/tub-with-two-up-trans-tails.json';
import _tub_with_very_long_tail from './life/still-life/strict-still-life/tub-with-very-long-tail.json';
import _tub from './life/still-life/strict-still-life/tub.json';
import _twelve_loop from './life/still-life/strict-still-life/twelve-loop.json';
import _twin_hat from './life/still-life/strict-still-life/twin-hat.json';
import _up_dove_on_dove from './life/still-life/strict-still-life/up-dove-on-dove.json';
import _up_snake_on_table from './life/still-life/strict-still-life/up-snake-on-table.json';
import _up_wing_on_wing from './life/still-life/strict-still-life/up-wing-on-wing.json';
import _very_long_barge from './life/still-life/strict-still-life/very-long-barge.json';
import _very_long_boat from './life/still-life/strict-still-life/very-long-boat.json';
import _very_long_canoe from './life/still-life/strict-still-life/very-long-canoe.json';
import _very_long_cis_hook_with_tail from './life/still-life/strict-still-life/very-long-cis-hook-with-tail.json';
import _very_long_cis_shillelagh from './life/still-life/strict-still-life/very-long-cis-shillelagh.json';
import _very_long_claw_with_tail from './life/still-life/strict-still-life/very-long-claw-with-tail.json';
import _very_long_hook_with_tail from './life/still-life/strict-still-life/very-long-hook-with-tail.json';
import _very_long_integral from './life/still-life/strict-still-life/very-long-integral.json';
import _very_long_melusine from './life/still-life/strict-still-life/very-long-melusine.json';
import _very_long_prodigal from './life/still-life/strict-still-life/very-long-prodigal.json';
import _very_long_shillelagh from './life/still-life/strict-still-life/very-long-shillelagh.json';
import _very_long_ship from './life/still-life/strict-still-life/very-long-ship.json';
import _very_long_snake from './life/still-life/strict-still-life/very-long-snake.json';
import _z_quad_loaf from './life/still-life/strict-still-life/z-quad-loaf.json';

render((
  <Router>
    <article path='/'>
      <h1>Conway's Game of Life</h1>
      
      <h2>Oscillator</h2>
      <nav><Link href='/oscillator/1-beacon.json'>{_1_beacon.title}</Link></nav>
      <nav><Link href='/oscillator/101.json'>{_101.title}</Link></nav>
      <nav><Link href='/oscillator/110P62.json'>{_110P62.title}</Link></nav>
      <nav><Link href='/oscillator/112P15.json'>{_112P15.title}</Link></nav>
      <nav><Link href='/oscillator/117P18.json'>{_117P18.title}</Link></nav>
      <nav><Link href='/oscillator/124P21.json'>{_124P21.title}</Link></nav>
      <nav><Link href='/oscillator/128P10_2.json'>{_128P10_2.title}</Link></nav>
      <nav><Link href='/oscillator/134P25.json'>{_134P25.title}</Link></nav>
      <nav><Link href='/oscillator/134P39_1.json'>{_134P39_1.title}</Link></nav>
      <nav><Link href='/oscillator/144P24.json'>{_144P24.title}</Link></nav>
      <nav><Link href='/oscillator/145P20.json'>{_145P20.title}</Link></nav>
      <nav><Link href='/oscillator/14P2_3.json'>{_14P2_3.title}</Link></nav>
      <nav><Link href='/oscillator/14P2_4.json'>{_14P2_4.title}</Link></nav>
      <nav><Link href='/oscillator/168P22_1.json'>{_168P22_1.title}</Link></nav>
      <nav><Link href='/oscillator/186P24.json'>{_186P24.title}</Link></nav>
      <nav><Link href='/oscillator/209P8.json'>{_209P8.title}</Link></nav>
      <nav><Link href='/oscillator/20P2.json'>{_20P2.title}</Link></nav>
      <nav><Link href='/oscillator/21P2.json'>{_21P2.title}</Link></nav>
      <nav><Link href='/oscillator/22P2.json'>{_22P2.title}</Link></nav>
      <nav><Link href='/oscillator/22P36.json'>{_22P36.title}</Link></nav>
      <nav><Link href='/oscillator/230P8.json'>{_230P8.title}</Link></nav>
      <nav><Link href='/oscillator/23P2.json'>{_23P2.title}</Link></nav>
      <nav><Link href='/oscillator/24P10.json'>{_24P10.title}</Link></nav>
      <nav><Link href='/oscillator/24P2.json'>{_24P2.title}</Link></nav>
      <nav><Link href='/oscillator/258P3-on-achims-p11.json'>{_258P3_on_achims_p11.title}</Link></nav>
      <nav><Link href='/oscillator/258P3.json'>{_258P3.title}</Link></nav>
      <nav><Link href='/oscillator/26P2.json'>{_26P2.title}</Link></nav>
      <nav><Link href='/oscillator/28P7_1.json'>{_28P7_1.title}</Link></nav>
      <nav><Link href='/oscillator/28P7_2.json'>{_28P7_2.title}</Link></nav>
      <nav><Link href='/oscillator/28P7_3.json'>{_28P7_3.title}</Link></nav>
      <nav><Link href='/oscillator/30P6_1.json'>{_30P6_1.title}</Link></nav>
      <nav><Link href='/oscillator/33P3_1.json'>{_33P3_1.title}</Link></nav>
      <nav><Link href='/oscillator/35P12_1.json'>{_35P12_1.title}</Link></nav>
      <nav><Link href='/oscillator/37P10_1.json'>{_37P10_1.title}</Link></nav>
      <nav><Link href='/oscillator/37P7_1.json'>{_37P7_1.title}</Link></nav>
      <nav><Link href='/oscillator/38P7_2.json'>{_38P7_2.title}</Link></nav>
      <nav><Link href='/oscillator/41P7_2.json'>{_41P7_2.title}</Link></nav>
      <nav><Link href='/oscillator/44P12_3.json'>{_44P12_3.title}</Link></nav>
      <nav><Link href='/oscillator/44P7_2.json'>{_44P7_2.title}</Link></nav>
      <nav><Link href='/oscillator/48P22_1.json'>{_48P22_1.title}</Link></nav>
      <nav><Link href='/oscillator/49P88.json'>{_49P88.title}</Link></nav>
      <nav><Link href='/oscillator/50P35.json'>{_50P35.title}</Link></nav>
      <nav><Link href='/oscillator/53P13.json'>{_53P13.title}</Link></nav>
      <nav><Link href='/oscillator/55P10.json'>{_55P10.title}</Link></nav>
      <nav><Link href='/oscillator/56P27.json'>{_56P27.title}</Link></nav>
      <nav><Link href='/oscillator/5blink.json'>{_5blink.title}</Link></nav>
      <nav><Link href='/oscillator/60P312.json'>{_60P312.title}</Link></nav>
      <nav><Link href='/oscillator/62P3_1.json'>{_62P3_1.title}</Link></nav>
      <nav><Link href='/oscillator/65P48.json'>{_65P48.title}</Link></nav>
      <nav><Link href='/oscillator/66P13.json'>{_66P13.title}</Link></nav>
      <nav><Link href='/oscillator/68P16.json'>{_68P16.title}</Link></nav>
      <nav><Link href='/oscillator/68P32_1.json'>{_68P32_1.title}</Link></nav>
      <nav><Link href='/oscillator/68P9.json'>{_68P9.title}</Link></nav>
      <nav><Link href='/oscillator/69P48.json'>{_69P48.title}</Link></nav>
      <nav><Link href='/oscillator/77P77.json'>{_77P77.title}</Link></nav>
      <nav><Link href='/oscillator/78P70.json'>{_78P70.title}</Link></nav>
      <nav><Link href='/oscillator/80P6.json'>{_80P6.title}</Link></nav>
      <nav><Link href='/oscillator/84P87.json'>{_84P87.title}</Link></nav>
      <nav><Link href='/oscillator/87P26.json'>{_87P26.title}</Link></nav>
      <nav><Link href='/oscillator/92P51.json'>{_92P51.title}</Link></nav>
      <nav><Link href='/oscillator/94P27_1.json'>{_94P27_1.title}</Link></nav>
      <nav><Link href='/oscillator/98P25.json'>{_98P25.title}</Link></nav>
      <nav><Link href='/oscillator/a-for-all.json'>{_a_for_all.title}</Link></nav>
      <nav><Link href='/oscillator/achims-other-p16.json'>{_achims_other_p16.title}</Link></nav>
      <nav><Link href='/oscillator/achims-p11.json'>{_achims_p11.title}</Link></nav>
      <nav><Link href='/oscillator/achims-p144.json'>{_achims_p144.title}</Link></nav>
      <nav><Link href='/oscillator/achims-p16.json'>{_achims_p16.title}</Link></nav>
      <nav><Link href='/oscillator/achims-p4.json'>{_achims_p4.title}</Link></nav>
      <nav><Link href='/oscillator/achims-p8.json'>{_achims_p8.title}</Link></nav>
      <nav><Link href='/oscillator/almosymmetric.json'>{_almosymmetric.title}</Link></nav>
      <h3>Babbling Brook</h3>
      <nav><Link href='/oscillator/babbling-brook/babbling-brook-1.json'>{_babbling_brook_1.title}</Link></nav>
      <nav><Link href='/oscillator/babbling-brook/beacon.json'>{_beacon.title}</Link></nav>
      <nav><Link href='/oscillator/babbling-brook/four-boats.json'>{_four_boats.title}</Link></nav>
      <nav><Link href='/oscillator/babbling-brook/great-on-off.json'>{_great_on_off.title}</Link></nav>
      <nav><Link href='/oscillator/babbling-brook/light-bulb.json'>{_light_bulb.title}</Link></nav>
      <nav><Link href='/oscillator/bakers-dozen.json'>{_bakers_dozen.title}</Link></nav>
      <nav><Link href='/oscillator/beacon-on-38P11_1.json'>{_beacon_on_38P11_1.title}</Link></nav>
      <nav><Link href='/oscillator/beacon-on-cover.json'>{_beacon_on_cover.title}</Link></nav>
      <nav><Link href='/oscillator/beehive-on-long-hook-eating-tub.json'>{_beehive_on_long_hook_eating_tub.title}</Link></nav>
      <nav><Link href='/oscillator/beehive-test-tube-baby.json'>{_beehive_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/beluchenkos-other-p37.json'>{_beluchenkos_other_p37.title}</Link></nav>
      <nav><Link href='/oscillator/beluchenkos-p13.json'>{_beluchenkos_p13.title}</Link></nav>
      <nav><Link href='/oscillator/beluchenkos-p37.json'>{_beluchenkos_p37.title}</Link></nav>
      <nav><Link href='/oscillator/beluchenkos-p40.json'>{_beluchenkos_p40.title}</Link></nav>
      <nav><Link href='/oscillator/beluchenkos-p51.json'>{_beluchenkos_p51.title}</Link></nav>
      <nav><Link href='/oscillator/bent-keys.json'>{_bent_keys.title}</Link></nav>
      <h3>Billiard Table</h3>
      <nav><Link href='/oscillator/billiard-table/$rats.json'>{_$rats.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/1-2-3-4.json'>{_1_2_3_4.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/1-2-3.json'>{_1_2_3.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/123P27_1.json'>{_123P27_1.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/29P9.json'>{_29P9.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/38P11_1.json'>{_38P11_1.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/42P10_3.json'>{_42P10_3.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/44P14.json'>{_44P14.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/54P17_1.json'>{_54P17_1.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/a-verage.json'>{_a_verage.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/airforce.json'>{_airforce.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/boss.json'>{_boss.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/burloaferimeter.json'>{_burloaferimeter.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/cauldron.json'>{_cauldron.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/champagne-glass.json'>{_champagne_glass.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/chemist.json'>{_chemist.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/clock-2.json'>{_clock_2.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/cousins.json'>{_cousins.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/crowd.json'>{_crowd.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/diamond-ring.json'>{_diamond_ring.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/en-retard.json'>{_en_retard.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/fore-and-back.json'>{_fore_and_back.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/frog-II.json'>{_frog_II.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/germ.json'>{_germ.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/hertz-oscillator.json'>{_hertz_oscillator.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/hustler-II.json'>{_hustler_II.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/hustler.json'>{_hustler.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/loading-dock.json'>{_loading_dock.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/mathematician.json'>{_mathematician.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/merzenichs-p18.json'>{_merzenichs_p18.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/mini-pressure-cooker.json'>{_mini_pressure_cooker.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/negentropy.json'>{_negentropy.title}</Link></nav>
      <nav><Link href='/oscillator/billiard-table/new-five.json'>{_new_five.title}</Link></nav>
      <nav><Link href='/oscillator/biting-off-more-than-they-can-chew.json'>{_biting_off_more_than_they_can_chew.title}</Link></nav>
      <nav><Link href='/oscillator/blinkers-bit-pole.json'>{_blinkers_bit_pole.title}</Link></nav>
      <nav><Link href='/oscillator/blocked-p4-1.json'>{_blocked_p4_1.title}</Link></nav>
      <nav><Link href='/oscillator/blocked-p4-2.json'>{_blocked_p4_2.title}</Link></nav>
      <nav><Link href='/oscillator/blocked-p4-3.json'>{_blocked_p4_3.title}</Link></nav>
      <nav><Link href='/oscillator/blocked-p4-4.json'>{_blocked_p4_4.title}</Link></nav>
      <nav><Link href='/oscillator/blocked-p4-5.json'>{_blocked_p4_5.title}</Link></nav>
      <nav><Link href='/oscillator/blocker.json'>{_blocker.title}</Link></nav>
      <nav><Link href='/oscillator/blonker-on-richs-p16.json'>{_blonker_on_richs_p16.title}</Link></nav>
      <nav><Link href='/oscillator/blonker.json'>{_blonker.title}</Link></nav>
      <nav><Link href='/oscillator/boat-test-tube-baby.json'>{_boat_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/boat-tie-quadpole.json'>{_boat_tie_quadpole.title}</Link></nav>
      <nav><Link href='/oscillator/boat-tie-spark-coil.json'>{_boat_tie_spark_coil.title}</Link></nav>
      <nav><Link href='/oscillator/boring-p24.json'>{_boring_p24.title}</Link></nav>
      <nav><Link href='/oscillator/bottle.json'>{_bottle.title}</Link></nav>
      <nav><Link href='/oscillator/buckinghams-p13.json'>{_buckinghams_p13.title}</Link></nav>
      <nav><Link href='/oscillator/candelabra.json'>{_candelabra.title}</Link></nav>
      <nav><Link href='/oscillator/candlefrobra.json'>{_candlefrobra.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-28P7_3.json'>{_caterer_on_28P7_3.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-42P7_1.json'>{_caterer_on_42P7_1.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-44P7_2.json'>{_caterer_on_44P7_2.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-68P32.json'>{_caterer_on_68P32.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-beluchenkos-p13.json'>{_caterer_on_beluchenkos_p13.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-figure-eight.json'>{_caterer_on_figure_eight.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-jasons-p22.json'>{_caterer_on_jasons_p22.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-merzenichs-p31.json'>{_caterer_on_merzenichs_p31.title}</Link></nav>
      <nav><Link href='/oscillator/caterer-on-rattlesnake.json'>{_caterer_on_rattlesnake.title}</Link></nav>
      <nav><Link href='/oscillator/caterer.json'>{_caterer.title}</Link></nav>
      <nav><Link href='/oscillator/cis-beacon-down-on-long-hook.json'>{_cis_beacon_down_on_long_hook.title}</Link></nav>
      <nav><Link href='/oscillator/cis-beacon-on-anvil.json'>{_cis_beacon_on_anvil.title}</Link></nav>
      <nav><Link href='/oscillator/cis-beacon-on-cap.json'>{_cis_beacon_on_cap.title}</Link></nav>
      <nav><Link href='/oscillator/cis-beacon-on-dock.json'>{_cis_beacon_on_dock.title}</Link></nav>
      <nav><Link href='/oscillator/cis-beacon-on-table.json'>{_cis_beacon_on_table.title}</Link></nav>
      <nav><Link href='/oscillator/cis-beacon-up-on-long-hook.json'>{_cis_beacon_up_on_long_hook.title}</Link></nav>
      <nav><Link href='/oscillator/cis-boat-on-long-hook-eating-tub.json'>{_cis_boat_on_long_hook_eating_tub.title}</Link></nav>
      <nav><Link href='/oscillator/claw-test-tube-baby.json'>{_claw_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/coes-p8.json'>{_coes_p8.title}</Link></nav>
      <nav><Link href='/oscillator/confused-eaters.json'>{_confused_eaters.title}</Link></nav>
      <nav><Link href='/oscillator/cross-2.json'>{_cross_2.title}</Link></nav>
      <nav><Link href='/oscillator/cross.json'>{_cross.title}</Link></nav>
      <nav><Link href='/oscillator/crown.json'>{_crown.title}</Link></nav>
      <nav><Link href='/oscillator/david-hilbert.json'>{_david_hilbert.title}</Link></nav>
      <nav><Link href='/oscillator/dinner-table.json'>{_dinner_table.title}</Link></nav>
      <nav><Link href='/oscillator/double-caterer.json'>{_double_caterer.title}</Link></nav>
      <nav><Link href='/oscillator/double-ewe.json'>{_double_ewe.title}</Link></nav>
      <nav><Link href='/oscillator/dueling-banjos.json'>{_dueling_banjos.title}</Link></nav>
      <nav><Link href='/oscillator/eater-block-frob.json'>{_eater_block_frob.title}</Link></nav>
      <nav><Link href='/oscillator/eater-plug.json'>{_eater_plug.title}</Link></nav>
      <nav><Link href='/oscillator/electric-fence.json'>{_electric_fence.title}</Link></nav>
      <nav><Link href='/oscillator/elkies-p5.json'>{_elkies_p5.title}</Link></nav>
      <nav><Link href='/oscillator/ellison-p4-HW-emulator-hybrid.json'>{_ellison_p4_HW_emulator_hybrid.title}</Link></nav>
      <nav><Link href='/oscillator/ellison-p4-HW-emulator.json'>{_ellison_p4_HW_emulator.title}</Link></nav>
      <nav><Link href='/oscillator/extremely-impressive.json'>{_extremely_impressive.title}</Link></nav>
      <nav><Link href='/oscillator/figure-eight-on-22P36.json'>{_figure_eight_on_22P36.title}</Link></nav>
      <nav><Link href='/oscillator/figure-eight-on-beluchenkos-p13.json'>{_figure_eight_on_beluchenkos_p13.title}</Link></nav>
      <nav><Link href='/oscillator/figure-eight-on-jasons-p22.json'>{_figure_eight_on_jasons_p22.title}</Link></nav>
      <nav><Link href='/oscillator/figure-eight-on-pentadecathlon.json'>{_figure_eight_on_pentadecathlon.title}</Link></nav>
      <nav><Link href='/oscillator/figure-eight-on-rattlesnake.json'>{_figure_eight_on_rattlesnake.title}</Link></nav>
      <nav><Link href='/oscillator/figure-eight.json'>{_figure_eight.title}</Link></nav>
      <nav><Link href='/oscillator/fire-spitting.json'>{_fire_spitting.title}</Link></nav>
      <nav><Link href='/oscillator/fountain.json'>{_fountain.title}</Link></nav>
      <nav><Link href='/oscillator/four-eaters-hassling-four-bookends.json'>{_four_eaters_hassling_four_bookends.title}</Link></nav>
      <nav><Link href='/oscillator/four-eaters-hassling-lumps-of-muck.json'>{_four_eaters_hassling_lumps_of_muck.title}</Link></nav>
      <nav><Link href='/oscillator/four-molds-hassling-eight-blocks.json'>{_four_molds_hassling_eight_blocks.title}</Link></nav>
      <nav><Link href='/oscillator/fox.json'>{_fox.title}</Link></nav>
      <nav><Link href='/oscillator/french-kiss.json'>{_french_kiss.title}</Link></nav>
      <nav><Link href='/oscillator/fumarole-on-34P14-shuttle.json'>{_fumarole_on_34P14_shuttle.title}</Link></nav>
      <nav><Link href='/oscillator/fumarole-on-achims-p11.json'>{_fumarole_on_achims_p11.title}</Link></nav>
      <nav><Link href='/oscillator/fumarole-on-beluchenkos-p13.json'>{_fumarole_on_beluchenkos_p13.title}</Link></nav>
      <nav><Link href='/oscillator/fumarole-on-p18-bi-block-hassler.json'>{_fumarole_on_p18_bi_block_hassler.title}</Link></nav>
      <nav><Link href='/oscillator/fumarole-on-richs-p16.json'>{_fumarole_on_richs_p16.title}</Link></nav>
      <nav><Link href='/oscillator/fumarole-on-robs-p16.json'>{_fumarole_on_robs_p16.title}</Link></nav>
      <nav><Link href='/oscillator/fumarole.json'>{_fumarole.title}</Link></nav>
      <nav><Link href='/oscillator/gabriels-p138.json'>{_gabriels_p138.title}</Link></nav>
      <nav><Link href='/oscillator/glasses.json'>{_glasses.title}</Link></nav>
      <h3>Griddle</h3>
      <nav><Link href='/oscillator/griddle/beehive-on-griddle.json'>{_beehive_on_griddle.title}</Link></nav>
      <nav><Link href='/oscillator/griddle/block-on-griddle.json'>{_block_on_griddle.title}</Link></nav>
      <nav><Link href='/oscillator/griddle/blocks-on-griddle.json'>{_blocks_on_griddle.title}</Link></nav>
      <nav><Link href='/oscillator/griddle/boat-on-griddle.json'>{_boat_on_griddle.title}</Link></nav>
      <nav><Link href='/oscillator/griddle/by-flops.json'>{_by_flops.title}</Link></nav>
      <nav><Link href='/oscillator/griddle/griddle-and-dock.json'>{_griddle_and_dock.title}</Link></nav>
      <nav><Link href='/oscillator/griddle/griddle-and-table.json'>{_griddle_and_table.title}</Link></nav>
      <nav><Link href='/oscillator/harbor.json'>{_harbor.title}</Link></nav>
      <nav><Link href='/oscillator/heart.json'>{_heart.title}</Link></nav>
      <nav><Link href='/oscillator/heavyweight-emulator.json'>{_heavyweight_emulator.title}</Link></nav>
      <nav><Link href='/oscillator/heavyweight-volcano.json'>{_heavyweight_volcano.title}</Link></nav>
      <nav><Link href='/oscillator/hebdarole.json'>{_hebdarole.title}</Link></nav>
      <nav><Link href='/oscillator/hive-test-tube-baby.json'>{_hive_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/honey-thieves-with-test-tube-baby.json'>{_honey_thieves_with_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/honey-thieves.json'>{_honey_thieves.title}</Link></nav>
      <nav><Link href='/oscillator/hook-test-tube-baby.json'>{_hook_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/hooks.json'>{_hooks.title}</Link></nav>
      <nav><Link href='/oscillator/jack.json'>{_jack.title}</Link></nav>
      <nav><Link href='/oscillator/jam.json'>{_jam.title}</Link></nav>
      <nav><Link href='/oscillator/jasons-p11.json'>{_jasons_p11.title}</Link></nav>
      <nav><Link href='/oscillator/jasons-p156.json'>{_jasons_p156.title}</Link></nav>
      <nav><Link href='/oscillator/jasons-p22.json'>{_jasons_p22.title}</Link></nav>
      <nav><Link href='/oscillator/jasons-p33.json'>{_jasons_p33.title}</Link></nav>
      <nav><Link href='/oscillator/jasons-p36.json'>{_jasons_p36.title}</Link></nav>
      <nav><Link href='/oscillator/jasons-p6.json'>{_jasons_p6.title}</Link></nav>
      <nav><Link href='/oscillator/jolson.json'>{_jolson.title}</Link></nav>
      <nav><Link href='/oscillator/karels-p15.json'>{_karels_p15.title}</Link></nav>
      <nav><Link href='/oscillator/karels-p177.json'>{_karels_p177.title}</Link></nav>
      <nav><Link href='/oscillator/karels-p28.json'>{_karels_p28.title}</Link></nav>
      <nav><Link href='/oscillator/koks-galaxy.json'>{_koks_galaxy.title}</Link></nav>
      <nav><Link href='/oscillator/laputa.json'>{_laputa.title}</Link></nav>
      <nav><Link href='/oscillator/lei.json'>{_lei.title}</Link></nav>
      <nav><Link href='/oscillator/light-speed-oscillator-1.json'>{_light_speed_oscillator_1.title}</Link></nav>
      <nav><Link href='/oscillator/light-speed-oscillator-2.json'>{_light_speed_oscillator_2.title}</Link></nav>
      <nav><Link href='/oscillator/light-speed-oscillator-3.json'>{_light_speed_oscillator_3.title}</Link></nav>
      <nav><Link href='/oscillator/lightweight-emulator.json'>{_lightweight_emulator.title}</Link></nav>
      <nav><Link href='/oscillator/loaf-test-tube-baby.json'>{_loaf_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/loaflipflop.json'>{_loaflipflop.title}</Link></nav>
      <nav><Link href='/oscillator/mangled-1-beacon.json'>{_mangled_1_beacon.title}</Link></nav>
      <nav><Link href='/oscillator/mango-test-tube-baby.json'>{_mango_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/mazing.json'>{_mazing.title}</Link></nav>
      <nav><Link href='/oscillator/merzenichs-p11.json'>{_merzenichs_p11.title}</Link></nav>
      <nav><Link href='/oscillator/merzenichs-p31.json'>{_merzenichs_p31.title}</Link></nav>
      <nav><Link href='/oscillator/merzenichs-p64.json'>{_merzenichs_p64.title}</Link></nav>
      <nav><Link href='/oscillator/middleweight-emulator.json'>{_middleweight_emulator.title}</Link></nav>
      <nav><Link href='/oscillator/middleweight-volcano.json'>{_middleweight_volcano.title}</Link></nav>
      <nav><Link href='/oscillator/mold-on-34P14-shuttle.json'>{_mold_on_34P14_shuttle.title}</Link></nav>
      <nav><Link href='/oscillator/mold-on-41P7_2.json'>{_mold_on_41P7_2.title}</Link></nav>
      <nav><Link href='/oscillator/mold-on-fumarole.json'>{_mold_on_fumarole.title}</Link></nav>
      <nav><Link href='/oscillator/mold-on-jasons-p22.json'>{_mold_on_jasons_p22.title}</Link></nav>
      <nav><Link href='/oscillator/mold-on-long-hook-eating-tub.json'>{_mold_on_long_hook_eating_tub.title}</Link></nav>
      <nav><Link href='/oscillator/mold-on-merzenichs-p31.json'>{_mold_on_merzenichs_p31.title}</Link></nav>
      <nav><Link href='/oscillator/mold-on-pentadecathlon.json'>{_mold_on_pentadecathlon.title}</Link></nav>
      <nav><Link href='/oscillator/mold-on-rattlesnake.json'>{_mold_on_rattlesnake.title}</Link></nav>
      <nav><Link href='/oscillator/mold.json'>{_mold.title}</Link></nav>
      <nav><Link href='/oscillator/monoclaw-test-tube-baby.json'>{_monoclaw_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/monogram.json'>{_monogram.title}</Link></nav>
      <nav><Link href='/oscillator/montana.json'>{_montana.title}</Link></nav>
      <h3>Muttering Moat</h3>
      <nav><Link href='/oscillator/muttering-moat/14P2_1.json'>{_14P2_1.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/bipole-tie-pseudo-barberpole.json'>{_bipole_tie_pseudo_barberpole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/bipole-tie-ship.json'>{_bipole_tie_ship.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/bipole-tie-snake.json'>{_bipole_tie_snake.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/bipole.json'>{_bipole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/blinker.json'>{_blinker.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/boat-tie-bipole.json'>{_boat_tie_bipole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/boat-tie-tripole.json'>{_boat_tie_tripole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/carrier-tie-bipole.json'>{_carrier_tie_bipole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/cha-cha.json'>{_cha_cha.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/circle-of-fire.json'>{_circle_of_fire.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/clock.json'>{_clock.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/cuphook.json'>{_cuphook.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/cyclic.json'>{_cyclic.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/decapole.json'>{_decapole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/duodecapole.json'>{_duodecapole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/gray-counter.json'>{_gray_counter.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/heptapole.json'>{_heptapole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/hexapole.json'>{_hexapole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/muttering-moat-1.json'>{_muttering_moat_1.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/nonapole.json'>{_nonapole.title}</Link></nav>
      <nav><Link href='/oscillator/muttering-moat/octapole.json'>{_octapole.title}</Link></nav>
      <nav><Link href='/oscillator/octagon-2.json'>{_octagon_2.title}</Link></nav>
      <nav><Link href='/oscillator/octagon-4.json'>{_octagon_4.title}</Link></nav>
      <nav><Link href='/oscillator/odd-keys.json'>{_odd_keys.title}</Link></nav>
      <nav><Link href='/oscillator/odd-test-tube-baby.json'>{_odd_test_tube_baby.title}</Link></nav>
      <nav><Link href='/oscillator/overweight-emulator.json'>{_overweight_emulator.title}</Link></nav>
      <nav><Link href='/oscillator/pulsar.json'>{_pulsar.title}</Link></nav>
      <h3>Relay</h3>
      <nav><Link href='/oscillator/relay/106P135.json'>{_106P135.title}</Link></nav>
      <nav><Link href='/oscillator/relay/6-bits.json'>{_6_bits.title}</Link></nav>
      <nav><Link href='/oscillator/relay/double-x.json'>{_double_x.title}</Link></nav>
      <nav><Link href='/oscillator/relay/hectic.json'>{_hectic.title}</Link></nav>
      <nav><Link href='/oscillator/relay/metamorphosis-II.json'>{_metamorphosis_II.title}</Link></nav>
      <h3>Shuttle</h3>
      <nav><Link href='/oscillator/shuttle/34P14-shuttle.json'>{_34P14_shuttle.title}</Link></nav>
      <nav><Link href='/oscillator/shuttle/carnival-shuttle.json'>{_carnival_shuttle.title}</Link></nav>
      <nav><Link href='/oscillator/shuttle/centinal.json'>{_centinal.title}</Link></nav>
      <nav><Link href='/oscillator/shuttle/diuresis.json'>{_diuresis.title}</Link></nav>
      <nav><Link href='/oscillator/shuttle/eureka.json'>{_eureka.title}</Link></nav>
      <nav><Link href='/oscillator/shuttle/gourmet.json'>{_gourmet.title}</Link></nav>
      <nav><Link href='/oscillator/shuttle/newshuttle.json'>{_newshuttle.title}</Link></nav>
      <h3>T Nose</h3>
      <nav><Link href='/oscillator/t-nose/blocked-p4-t-nose-hybrid.json'>{_blocked_p4_t_nose_hybrid.title}</Link></nav>
      <nav><Link href='/oscillator/t-nose/blocked-p4-t-nose.json'>{_blocked_p4_t_nose.title}</Link></nav>
      <nav><Link href='/oscillator/toad.json'>{_toad.title}</Link></nav>
      <h2>Still Life</h2>
      <h3>Eater</h3>
      <nav><Link href='/still-life/eater/7x9-eater.json'>{_7x9_eater.title}</Link></nav>
      <nav><Link href='/still-life/eater/century-eater.json'>{_century_eater.title}</Link></nav>
      <nav><Link href='/still-life/eater/eater-1.json'>{_eater_1.title}</Link></nav>
      <nav><Link href='/still-life/eater/eater-2.json'>{_eater_2.title}</Link></nav>
      <nav><Link href='/still-life/eater/eater-3.json'>{_eater_3.title}</Link></nav>
      <nav><Link href='/still-life/eater/eater-4.json'>{_eater_4.title}</Link></nav>
      <nav><Link href='/still-life/eater/sidesnagger.json'>{_sidesnagger.title}</Link></nav>
      <nav><Link href='/still-life/eater/tub-with-tail-eater.json'>{_tub_with_tail_eater.title}</Link></nav>
      <h3>Pseudo Still Life</h3>
      <nav><Link href='/still-life/pseudo-still-life/bi-block.json'>{_bi_block.title}</Link></nav>
      <nav><Link href='/still-life/pseudo-still-life/bi-boat.json'>{_bi_boat.title}</Link></nav>
      <nav><Link href='/still-life/pseudo-still-life/block-on-boat.json'>{_block_on_boat.title}</Link></nav>
      <nav><Link href='/still-life/pseudo-still-life/pond-on-pond.json'>{_pond_on_pond.title}</Link></nav>
      <nav><Link href='/still-life/pseudo-still-life/quad-pseudo-still-life.json'>{_quad_pseudo_still_life.title}</Link></nav>
      <nav><Link href='/still-life/pseudo-still-life/triple-pseudo-still-life.json'>{_triple_pseudo_still_life.title}</Link></nav>
      <h3>Strict Still Life</h3>
      <nav><Link href='/still-life/strict-still-life/15-bent-paperclip.json'>{_15_bent_paperclip.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/29-bit-still-life-no1.json'>{_29_bit_still_life_no1.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/31_4.json'>{_31_4.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/aircraft-carrier.json'>{_aircraft_carrier.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/amphisbaena.json'>{_amphisbaena.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/aries-betwixt-two-blocks.json'>{_aries_betwixt_two_blocks.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/asymmetric-amphisbaena.json'>{_asymmetric_amphisbaena.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/barge-siamese-loaf.json'>{_barge_siamese_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/barge-with-long-tail.json'>{_barge_with_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/barge-with-very-long-tail.json'>{_barge_with_very_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/barge.json'>{_barge.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/bee-hat.json'>{_bee_hat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-at-beehive.json'>{_beehive_at_beehive.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-at-claw.json'>{_beehive_at_claw.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-at-loaf.json'>{_beehive_at_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-on-cap.json'>{_beehive_on_cap.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-on-dock.json'>{_beehive_on_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-on-table.json'>{_beehive_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-with-bend-tail.json'>{_beehive_with_bend_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-with-nine.json'>{_beehive_with_nine.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive-with-tail.json'>{_beehive_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/beehive.json'>{_beehive.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/bi-cap.json'>{_bi_cap.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/bi-loaf2.json'>{_bi_loaf2.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/bi-pond.json'>{_bi_pond.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/big-s.json'>{_big_s.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/block-on-cap.json'>{_block_on_cap.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/block-on-cover.json'>{_block_on_cover.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/block-on-dock.json'>{_block_on_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/block-on-table.json'>{_block_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/block.json'>{_block.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-tie-eater-head.json'>{_boat_tie_eater_head.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-tie-eater-tail.json'>{_boat_tie_eater_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-tie-long-boat.json'>{_boat_tie_long_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-tie-long-snake.json'>{_boat_tie_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-tie-ship.json'>{_boat_tie_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-tie-snake.json'>{_boat_tie_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-tie.json'>{_boat_tie.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-with-cis-tail.json'>{_boat_with_cis_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-with-hooked-tail.json'>{_boat_with_hooked_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-with-long-tail.json'>{_boat_with_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-with-long3-tail.json'>{_boat_with_long3_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat-with-very-long-tail.json'>{_boat_with_very_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/boat.json'>{_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/bookend-table-snake.json'>{_bookend_table_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/bookends-siamese-tables.json'>{_bookends_siamese_tables.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/bookends.json'>{_bookends.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/broken-elevener.json'>{_broken_elevener.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/broken-snake.json'>{_broken_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/canoe-siamese-snake.json'>{_canoe_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/canoe.json'>{_canoe.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cap-and-dock.json'>{_cap_and_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-bridge-carrier.json'>{_carrier_bridge_carrier.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-bridge-snake.json'>{_carrier_bridge_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-bridge-table.json'>{_carrier_bridge_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-canoe.json'>{_carrier_siamese_canoe.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-carrier.json'>{_carrier_siamese_carrier.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-dock.json'>{_carrier_siamese_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-eater-head.json'>{_carrier_siamese_eater_head.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-eater-tail.json'>{_carrier_siamese_eater_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-hook-with-tail-hook.json'>{_carrier_siamese_hook_with_tail_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-hook-with-tail-tail.json'>{_carrier_siamese_hook_with_tail_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-long-snake.json'>{_carrier_siamese_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-shillelagh.json'>{_carrier_siamese_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-tub-with-tail.json'>{_carrier_siamese_tub_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-siamese-very-long-snake.json'>{_carrier_siamese_very_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-tie-boat.json'>{_carrier_tie_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-tie-ship.json'>{_carrier_tie_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/carrier-with-feather.json'>{_carrier_with_feather.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-barge-with-nine.json'>{_cis_barge_with_nine.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-barge-with-tail.json'>{_cis_barge_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-block-on-long-hook.json'>{_cis_block_on_long_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-boat-amphisbaena.json'>{_cis_boat_amphisbaena.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-boat-and-cap.json'>{_cis_boat_and_cap.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-boat-line-tub.json'>{_cis_boat_line_tub.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-boat-on-dock.json'>{_cis_boat_on_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-boat-on-table.json'>{_cis_boat_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-boat-with-nine.json'>{_cis_boat_with_nine.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-boat-with-tail.json'>{_cis_boat_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-carrier-down-on-table.json'>{_cis_carrier_down_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-carrier-tie-snake.json'>{_cis_carrier_tie_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-carrier-tie.json'>{_cis_carrier_tie.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-carrier-up-on-table.json'>{_cis_carrier_up_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-fuse-with-two-tails.json'>{_cis_fuse_with_two_tails.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-hook-and-R-bee.json'>{_cis_hook_and_R_bee.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-hook-with-tail.json'>{_cis_hook_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-loaf-with-tail.json'>{_cis_loaf_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-long-barge-with-tail.json'>{_cis_long_barge_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-long-boat-with-tail.json'>{_cis_long_boat_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-mango-with-tail.json'>{_cis_mango_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-mirrored-R-bee.json'>{_cis_mirrored_R_bee.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-mirrored-worm-siamese-cis-mirrored-worm.json'>{_cis_mirrored_worm_siamese_cis_mirrored_worm.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-mirrored-worm.json'>{_cis_mirrored_worm.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-R-bee-and-R-loaf.json'>{_cis_R_bee_and_R_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-rotated-hook.json'>{_cis_rotated_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-rotated-R-bee.json'>{_cis_rotated_R_bee.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-shillelagh.json'>{_cis_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-ship-on-table.json'>{_cis_ship_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cis-snake-tie.json'>{_cis_snake_tie.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/claw-siamese-tub-with-cape.json'>{_claw_siamese_tub_with_cape.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/claw-with-boat-with-tail.json'>{_claw_with_boat_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/claw-with-tail.json'>{_claw_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/claw-with-tub-with-tail.json'>{_claw_with_tub_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/clips.json'>{_clips.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cloverleaf-interchange.json'>{_cloverleaf_interchange.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/cthulhu.json'>{_cthulhu.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/dead-spark-coil.json'>{_dead_spark_coil.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/dock-and-long-hook.json'>{_dock_and_long_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/double-claw.json'>{_double_claw.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/down-snake-on-table.json'>{_down_snake_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-bridge-eater.json'>{_eater_bridge_eater.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-head-siamese-eater-head.json'>{_eater_head_siamese_eater_head.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-head-siamese-eater-tail.json'>{_eater_head_siamese_eater_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-head-siamese-long-snake.json'>{_eater_head_siamese_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-head-siamese-snake.json'>{_eater_head_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-tail-siamese-eater-tail.json'>{_eater_tail_siamese_eater_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-tail-siamese-long-snake.json'>{_eater_tail_siamese_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-tail-siamese-snake.json'>{_eater_tail_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-with-cape.json'>{_eater_with_cape.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-with-head-feather.json'>{_eater_with_head_feather.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eater-with-tail-feather.json'>{_eater_with_tail_feather.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/egyptian-walk.json'>{_egyptian_walk.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/eleven-loop.json'>{_eleven_loop.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/elevener.json'>{_elevener.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/fourteener.json'>{_fourteener.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/fuse-with-tail-and-integral.json'>{_fuse_with_tail_and_integral.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/fuse-with-tail-and-long-tail.json'>{_fuse_with_tail_and_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/fuse-with-tail-and-very-long-tail.json'>{_fuse_with_tail_and_very_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/fuse-with-two-long-tails.json'>{_fuse_with_two_long_tails.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/grin-reagent.json'>{_grin_reagent.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/gull-with-tub.json'>{_gull_with_tub.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/half-bakery.json'>{_half_bakery.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hat-siamese-vase.json'>{_hat_siamese_vase.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hat.json'>{_hat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hexagonal-key.json'>{_hexagonal_key.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/honeybarge.json'>{_honeybarge.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/honeycomb.json'>{_honeycomb.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hook-with-nine.json'>{_hook_with_nine.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hook-with-tail-hook-siamese-snake.json'>{_hook_with_tail_hook_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hook-with-tail-tail-siamese-snake.json'>{_hook_with_tail_tail_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hook-with-tail-with-cape.json'>{_hook_with_tail_with_cape.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hook-with-tail.json'>{_hook_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hook-with-two-tails.json'>{_hook_with_two_tails.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/house-on-house-siamese-table-on-table-weld-hat-siamese-hat.json'>{_house_on_house_siamese_table_on_table_weld_hat_siamese_hat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/hungry-hat.json'>{_hungry_hat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/inflected-clips.json'>{_inflected_clips.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/inflected-long-snake.json'>{_inflected_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/inflexion.json'>{_inflexion.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-sign.json'>{_integral_sign.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-cis-hook.json'>{_integral_with_cis_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-hook-and-tail.json'>{_integral_with_hook_and_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-hook.json'>{_integral_with_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-long-hook-and-tub.json'>{_integral_with_long_hook_and_tub.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-long-hook.json'>{_integral_with_long_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-tub-and-hook.json'>{_integral_with_tub_and_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-tub-and-tail.json'>{_integral_with_tub_and_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-tub.json'>{_integral_with_tub.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-two-tubs.json'>{_integral_with_two_tubs.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/integral-with-very-long-hook.json'>{_integral_with_very_long_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/inverted-double-claw.json'>{_inverted_double_claw.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/lake2.json'>{_lake2.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/loaf-back-tie-loaf.json'>{_loaf_back_tie_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/loaf-siamese-loaf.json'>{_loaf_siamese_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/loaf-tie-eater-with-tail.json'>{_loaf_tie_eater_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/loaf.json'>{_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-barge.json'>{_long_barge.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-boat-tie-ship.json'>{_long_boat_tie_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-boat-with-long-tail.json'>{_long_boat_with_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-boat.json'>{_long_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-canoe.json'>{_long_canoe.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-cis-hook-with-tail.json'>{_long_cis_hook_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-cis-shillelagh.json'>{_long_cis_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-claw-with-tail.json'>{_long_claw_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-hook-with-tail.json'>{_long_hook_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-integral-with-boat.json'>{_long_integral_with_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-integral.json'>{_long_integral.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-melusine.json'>{_long_melusine.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-prodigal.json'>{_long_prodigal.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-shillelagh.json'>{_long_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-ship.json'>{_long_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-snake-siamese-long-snake.json'>{_long_snake_siamese_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-snake.json'>{_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long-tub-claw-with-tail.json'>{_long_tub_claw_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long10-boat.json'>{_long10_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long10-ship.json'>{_long10_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long3-barge.json'>{_long3_barge.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long3-boat.json'>{_long3_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long3-canoe.json'>{_long3_canoe.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long3-hook-with-tail.json'>{_long3_hook_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long3-integral.json'>{_long3_integral.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long3-shillelagh.json'>{_long3_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long3-ship.json'>{_long3_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long3-snake.json'>{_long3_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long4-barge.json'>{_long4_barge.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long4-boat.json'>{_long4_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long4-canoe.json'>{_long4_canoe.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long4-hook-with-tail.json'>{_long4_hook_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long4-shillelagh.json'>{_long4_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long4-ship.json'>{_long4_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long4-snake.json'>{_long4_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long5-barge.json'>{_long5_barge.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long5-boat.json'>{_long5_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long5-ship.json'>{_long5_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long5-snake.json'>{_long5_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long6-barge.json'>{_long6_barge.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long6-boat.json'>{_long6_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long6-ship.json'>{_long6_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long6-snake.json'>{_long6_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long7-boat.json'>{_long7_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long7-ship.json'>{_long7_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long8-boat.json'>{_long8_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long8-ship.json'>{_long8_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long9-boat.json'>{_long9_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/long9-ship.json'>{_long9_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/longhorn.json'>{_longhorn.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/loop.json'>{_loop.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/mango-with-block-on-dock.json'>{_mango_with_block_on_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/mango.json'>{_mango.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/mickey-mouse.json'>{_mickey_mouse.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/mirrored-dock.json'>{_mirrored_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/moose-antlers.json'>{_moose_antlers.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/o-quad-loaf.json'>{_o_quad_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/omnibus-with-tubs.json'>{_omnibus_with_tubs.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/omnibus.json'>{_omnibus.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/ortho-loaf-on-table.json'>{_ortho_loaf_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/paperclip.json'>{_paperclip.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/pond-on-dock.json'>{_pond_on_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/pond.json'>{_pond.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/professor.json'>{_professor.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/python-siamese-snake.json'>{_python_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/R-bee-and-snake.json'>{_R_bee_and_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/R-bee-on-beehive.json'>{_R_bee_on_beehive.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/R-bee-with-feather.json'>{_R_bee_with_feather.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/R-mango-and-house.json'>{_R_mango_and_house.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/rotated-c.json'>{_rotated_c.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/rotated-table.json'>{_rotated_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/scorpion.json'>{_scorpion.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/sesquihat.json'>{_sesquihat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/shillelagh-siamese-snake.json'>{_shillelagh_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/shillelagh.json'>{_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/ship-tie-snake.json'>{_ship_tie_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/ship-tie.json'>{_ship_tie.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/ship.json'>{_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/shuriken.json'>{_shuriken.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/sidewalk.json'>{_sidewalk.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/skew-R-bees.json'>{_skew_R_bees.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/small-lake.json'>{_small_lake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/snake-bridge-snake.json'>{_snake_bridge_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/snake-siamese-snake.json'>{_snake_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/snake-siamese-very-long-snake.json'>{_snake_siamese_very_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/snake-with-feather.json'>{_snake_with_feather.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/snake.json'>{_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/snorkel-loop.json'>{_snorkel_loop.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/spiral.json'>{_spiral.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/super-loaf.json'>{_super_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/super-mango.json'>{_super_mango.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/super-pond.json'>{_super_pond.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/symmetric-scorpion.json'>{_symmetric_scorpion.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/symmetrical-synapse.json'>{_symmetrical_synapse.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/table-and-dock.json'>{_table_and_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/table-and-table.json'>{_table_and_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/teardrop-with-cape.json'>{_teardrop_with_cape.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/teardrop-with-claw.json'>{_teardrop_with_claw.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/thirteen-loop.json'>{_thirteen_loop.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-barge-with-nine.json'>{_trans_barge_with_nine.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-barge-with-tail.json'>{_trans_barge_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-block-on-long-hook.json'>{_trans_block_on_long_hook.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-boat-amphisbaena.json'>{_trans_boat_amphisbaena.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-boat-line-tub.json'>{_trans_boat_line_tub.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-boat-on-dock.json'>{_trans_boat_on_dock.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-boat-on-table.json'>{_trans_boat_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-boat-with-nine.json'>{_trans_boat_with_nine.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-boat-with-tail.json'>{_trans_boat_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-carrier-down-on-table.json'>{_trans_carrier_down_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-carrier-tie-snake.json'>{_trans_carrier_tie_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-carrier-tie.json'>{_trans_carrier_tie.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-carrier-up-on-table.json'>{_trans_carrier_up_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-fuse-with-two-tails.json'>{_trans_fuse_with_two_tails.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-hook-and-R-bee.json'>{_trans_hook_and_R_bee.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-loaf-with-tail.json'>{_trans_loaf_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-long-barge-with-tail.json'>{_trans_long_barge_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-long-boat-with-tail.json'>{_trans_long_boat_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-mango-with-tail.json'>{_trans_mango_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-mirrored-R-bee.json'>{_trans_mirrored_R_bee.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-R-bee-and-R-loaf.json'>{_trans_R_bee_and_R_loaf.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-rotated-R-bee.json'>{_trans_rotated_R_bee.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-ship-on-table.json'>{_trans_ship_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/trans-snake-tie.json'>{_trans_snake_tie.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-bend-line-tub.json'>{_tub_bend_line_tub.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-cis-tail.json'>{_tub_with_cis_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-long-cis-tail.json'>{_tub_with_long_cis_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-long-tail.json'>{_tub_with_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-long3-tail.json'>{_tub_with_long3_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-long4-tail.json'>{_tub_with_long4_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-tail-siamese-snake.json'>{_tub_with_tail_siamese_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-tail-with-cape.json'>{_tub_with_tail_with_cape.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-tail.json'>{_tub_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-two-down-cis-tails.json'>{_tub_with_two_down_cis_tails.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-two-down-trans-tails.json'>{_tub_with_two_down_trans_tails.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-two-up-cis-tails.json'>{_tub_with_two_up_cis_tails.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-two-up-trans-tails.json'>{_tub_with_two_up_trans_tails.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub-with-very-long-tail.json'>{_tub_with_very_long_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/tub.json'>{_tub.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/twelve-loop.json'>{_twelve_loop.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/twin-hat.json'>{_twin_hat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/up-dove-on-dove.json'>{_up_dove_on_dove.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/up-snake-on-table.json'>{_up_snake_on_table.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/up-wing-on-wing.json'>{_up_wing_on_wing.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-barge.json'>{_very_long_barge.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-boat.json'>{_very_long_boat.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-canoe.json'>{_very_long_canoe.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-cis-hook-with-tail.json'>{_very_long_cis_hook_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-cis-shillelagh.json'>{_very_long_cis_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-claw-with-tail.json'>{_very_long_claw_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-hook-with-tail.json'>{_very_long_hook_with_tail.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-integral.json'>{_very_long_integral.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-melusine.json'>{_very_long_melusine.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-prodigal.json'>{_very_long_prodigal.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-shillelagh.json'>{_very_long_shillelagh.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-ship.json'>{_very_long_ship.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/very-long-snake.json'>{_very_long_snake.title}</Link></nav>
      <nav><Link href='/still-life/strict-still-life/z-quad-loaf.json'>{_z_quad_loaf.title}</Link></nav>
    </article>
    
    <Page path='/oscillator/1-beacon.json' lifeData={_1_beacon} />
    <Page path='/oscillator/101.json' lifeData={_101} />
    <Page path='/oscillator/110P62.json' lifeData={_110P62} />
    <Page path='/oscillator/112P15.json' lifeData={_112P15} />
    <Page path='/oscillator/117P18.json' lifeData={_117P18} />
    <Page path='/oscillator/124P21.json' lifeData={_124P21} />
    <Page path='/oscillator/128P10_2.json' lifeData={_128P10_2} />
    <Page path='/oscillator/134P25.json' lifeData={_134P25} />
    <Page path='/oscillator/134P39_1.json' lifeData={_134P39_1} />
    <Page path='/oscillator/144P24.json' lifeData={_144P24} />
    <Page path='/oscillator/145P20.json' lifeData={_145P20} />
    <Page path='/oscillator/14P2_3.json' lifeData={_14P2_3} />
    <Page path='/oscillator/14P2_4.json' lifeData={_14P2_4} />
    <Page path='/oscillator/168P22_1.json' lifeData={_168P22_1} />
    <Page path='/oscillator/186P24.json' lifeData={_186P24} />
    <Page path='/oscillator/209P8.json' lifeData={_209P8} />
    <Page path='/oscillator/20P2.json' lifeData={_20P2} />
    <Page path='/oscillator/21P2.json' lifeData={_21P2} />
    <Page path='/oscillator/22P2.json' lifeData={_22P2} />
    <Page path='/oscillator/22P36.json' lifeData={_22P36} />
    <Page path='/oscillator/230P8.json' lifeData={_230P8} />
    <Page path='/oscillator/23P2.json' lifeData={_23P2} />
    <Page path='/oscillator/24P10.json' lifeData={_24P10} />
    <Page path='/oscillator/24P2.json' lifeData={_24P2} />
    <Page path='/oscillator/258P3-on-achims-p11.json' lifeData={_258P3_on_achims_p11} />
    <Page path='/oscillator/258P3.json' lifeData={_258P3} />
    <Page path='/oscillator/26P2.json' lifeData={_26P2} />
    <Page path='/oscillator/28P7_1.json' lifeData={_28P7_1} />
    <Page path='/oscillator/28P7_2.json' lifeData={_28P7_2} />
    <Page path='/oscillator/28P7_3.json' lifeData={_28P7_3} />
    <Page path='/oscillator/30P6_1.json' lifeData={_30P6_1} />
    <Page path='/oscillator/33P3_1.json' lifeData={_33P3_1} />
    <Page path='/oscillator/35P12_1.json' lifeData={_35P12_1} />
    <Page path='/oscillator/37P10_1.json' lifeData={_37P10_1} />
    <Page path='/oscillator/37P7_1.json' lifeData={_37P7_1} />
    <Page path='/oscillator/38P7_2.json' lifeData={_38P7_2} />
    <Page path='/oscillator/41P7_2.json' lifeData={_41P7_2} />
    <Page path='/oscillator/44P12_3.json' lifeData={_44P12_3} />
    <Page path='/oscillator/44P7_2.json' lifeData={_44P7_2} />
    <Page path='/oscillator/48P22_1.json' lifeData={_48P22_1} />
    <Page path='/oscillator/49P88.json' lifeData={_49P88} />
    <Page path='/oscillator/50P35.json' lifeData={_50P35} />
    <Page path='/oscillator/53P13.json' lifeData={_53P13} />
    <Page path='/oscillator/55P10.json' lifeData={_55P10} />
    <Page path='/oscillator/56P27.json' lifeData={_56P27} />
    <Page path='/oscillator/5blink.json' lifeData={_5blink} />
    <Page path='/oscillator/60P312.json' lifeData={_60P312} />
    <Page path='/oscillator/62P3_1.json' lifeData={_62P3_1} />
    <Page path='/oscillator/65P48.json' lifeData={_65P48} />
    <Page path='/oscillator/66P13.json' lifeData={_66P13} />
    <Page path='/oscillator/68P16.json' lifeData={_68P16} />
    <Page path='/oscillator/68P32_1.json' lifeData={_68P32_1} />
    <Page path='/oscillator/68P9.json' lifeData={_68P9} />
    <Page path='/oscillator/69P48.json' lifeData={_69P48} />
    <Page path='/oscillator/77P77.json' lifeData={_77P77} />
    <Page path='/oscillator/78P70.json' lifeData={_78P70} />
    <Page path='/oscillator/80P6.json' lifeData={_80P6} />
    <Page path='/oscillator/84P87.json' lifeData={_84P87} />
    <Page path='/oscillator/87P26.json' lifeData={_87P26} />
    <Page path='/oscillator/92P51.json' lifeData={_92P51} />
    <Page path='/oscillator/94P27_1.json' lifeData={_94P27_1} />
    <Page path='/oscillator/98P25.json' lifeData={_98P25} />
    <Page path='/oscillator/a-for-all.json' lifeData={_a_for_all} />
    <Page path='/oscillator/achims-other-p16.json' lifeData={_achims_other_p16} />
    <Page path='/oscillator/achims-p11.json' lifeData={_achims_p11} />
    <Page path='/oscillator/achims-p144.json' lifeData={_achims_p144} />
    <Page path='/oscillator/achims-p16.json' lifeData={_achims_p16} />
    <Page path='/oscillator/achims-p4.json' lifeData={_achims_p4} />
    <Page path='/oscillator/achims-p8.json' lifeData={_achims_p8} />
    <Page path='/oscillator/almosymmetric.json' lifeData={_almosymmetric} />
    <Page path='/oscillator/babbling-brook/babbling-brook-1.json' lifeData={_babbling_brook_1} />
    <Page path='/oscillator/babbling-brook/beacon.json' lifeData={_beacon} />
    <Page path='/oscillator/babbling-brook/four-boats.json' lifeData={_four_boats} />
    <Page path='/oscillator/babbling-brook/great-on-off.json' lifeData={_great_on_off} />
    <Page path='/oscillator/babbling-brook/light-bulb.json' lifeData={_light_bulb} />
    <Page path='/oscillator/bakers-dozen.json' lifeData={_bakers_dozen} />
    <Page path='/oscillator/beacon-on-38P11_1.json' lifeData={_beacon_on_38P11_1} />
    <Page path='/oscillator/beacon-on-cover.json' lifeData={_beacon_on_cover} />
    <Page path='/oscillator/beehive-on-long-hook-eating-tub.json' lifeData={_beehive_on_long_hook_eating_tub} />
    <Page path='/oscillator/beehive-test-tube-baby.json' lifeData={_beehive_test_tube_baby} />
    <Page path='/oscillator/beluchenkos-other-p37.json' lifeData={_beluchenkos_other_p37} />
    <Page path='/oscillator/beluchenkos-p13.json' lifeData={_beluchenkos_p13} />
    <Page path='/oscillator/beluchenkos-p37.json' lifeData={_beluchenkos_p37} />
    <Page path='/oscillator/beluchenkos-p40.json' lifeData={_beluchenkos_p40} />
    <Page path='/oscillator/beluchenkos-p51.json' lifeData={_beluchenkos_p51} />
    <Page path='/oscillator/bent-keys.json' lifeData={_bent_keys} />
    <Page path='/oscillator/billiard-table/$rats.json' lifeData={_$rats} />
    <Page path='/oscillator/billiard-table/1-2-3-4.json' lifeData={_1_2_3_4} />
    <Page path='/oscillator/billiard-table/1-2-3.json' lifeData={_1_2_3} />
    <Page path='/oscillator/billiard-table/123P27_1.json' lifeData={_123P27_1} />
    <Page path='/oscillator/billiard-table/29P9.json' lifeData={_29P9} />
    <Page path='/oscillator/billiard-table/38P11_1.json' lifeData={_38P11_1} />
    <Page path='/oscillator/billiard-table/42P10_3.json' lifeData={_42P10_3} />
    <Page path='/oscillator/billiard-table/44P14.json' lifeData={_44P14} />
    <Page path='/oscillator/billiard-table/54P17_1.json' lifeData={_54P17_1} />
    <Page path='/oscillator/billiard-table/a-verage.json' lifeData={_a_verage} />
    <Page path='/oscillator/billiard-table/airforce.json' lifeData={_airforce} />
    <Page path='/oscillator/billiard-table/boss.json' lifeData={_boss} />
    <Page path='/oscillator/billiard-table/burloaferimeter.json' lifeData={_burloaferimeter} />
    <Page path='/oscillator/billiard-table/cauldron.json' lifeData={_cauldron} />
    <Page path='/oscillator/billiard-table/champagne-glass.json' lifeData={_champagne_glass} />
    <Page path='/oscillator/billiard-table/chemist.json' lifeData={_chemist} />
    <Page path='/oscillator/billiard-table/clock-2.json' lifeData={_clock_2} />
    <Page path='/oscillator/billiard-table/cousins.json' lifeData={_cousins} />
    <Page path='/oscillator/billiard-table/crowd.json' lifeData={_crowd} />
    <Page path='/oscillator/billiard-table/diamond-ring.json' lifeData={_diamond_ring} />
    <Page path='/oscillator/billiard-table/en-retard.json' lifeData={_en_retard} />
    <Page path='/oscillator/billiard-table/fore-and-back.json' lifeData={_fore_and_back} />
    <Page path='/oscillator/billiard-table/frog-II.json' lifeData={_frog_II} />
    <Page path='/oscillator/billiard-table/germ.json' lifeData={_germ} />
    <Page path='/oscillator/billiard-table/hertz-oscillator.json' lifeData={_hertz_oscillator} />
    <Page path='/oscillator/billiard-table/hustler-II.json' lifeData={_hustler_II} />
    <Page path='/oscillator/billiard-table/hustler.json' lifeData={_hustler} />
    <Page path='/oscillator/billiard-table/loading-dock.json' lifeData={_loading_dock} />
    <Page path='/oscillator/billiard-table/mathematician.json' lifeData={_mathematician} />
    <Page path='/oscillator/billiard-table/merzenichs-p18.json' lifeData={_merzenichs_p18} />
    <Page path='/oscillator/billiard-table/mini-pressure-cooker.json' lifeData={_mini_pressure_cooker} />
    <Page path='/oscillator/billiard-table/negentropy.json' lifeData={_negentropy} />
    <Page path='/oscillator/billiard-table/new-five.json' lifeData={_new_five} />
    <Page path='/oscillator/biting-off-more-than-they-can-chew.json' lifeData={_biting_off_more_than_they_can_chew} />
    <Page path='/oscillator/blinkers-bit-pole.json' lifeData={_blinkers_bit_pole} />
    <Page path='/oscillator/blocked-p4-1.json' lifeData={_blocked_p4_1} />
    <Page path='/oscillator/blocked-p4-2.json' lifeData={_blocked_p4_2} />
    <Page path='/oscillator/blocked-p4-3.json' lifeData={_blocked_p4_3} />
    <Page path='/oscillator/blocked-p4-4.json' lifeData={_blocked_p4_4} />
    <Page path='/oscillator/blocked-p4-5.json' lifeData={_blocked_p4_5} />
    <Page path='/oscillator/blocker.json' lifeData={_blocker} />
    <Page path='/oscillator/blonker-on-richs-p16.json' lifeData={_blonker_on_richs_p16} />
    <Page path='/oscillator/blonker.json' lifeData={_blonker} />
    <Page path='/oscillator/boat-test-tube-baby.json' lifeData={_boat_test_tube_baby} />
    <Page path='/oscillator/boat-tie-quadpole.json' lifeData={_boat_tie_quadpole} />
    <Page path='/oscillator/boat-tie-spark-coil.json' lifeData={_boat_tie_spark_coil} />
    <Page path='/oscillator/boring-p24.json' lifeData={_boring_p24} />
    <Page path='/oscillator/bottle.json' lifeData={_bottle} />
    <Page path='/oscillator/buckinghams-p13.json' lifeData={_buckinghams_p13} />
    <Page path='/oscillator/candelabra.json' lifeData={_candelabra} />
    <Page path='/oscillator/candlefrobra.json' lifeData={_candlefrobra} />
    <Page path='/oscillator/caterer-on-28P7_3.json' lifeData={_caterer_on_28P7_3} />
    <Page path='/oscillator/caterer-on-42P7_1.json' lifeData={_caterer_on_42P7_1} />
    <Page path='/oscillator/caterer-on-44P7_2.json' lifeData={_caterer_on_44P7_2} />
    <Page path='/oscillator/caterer-on-68P32.json' lifeData={_caterer_on_68P32} />
    <Page path='/oscillator/caterer-on-beluchenkos-p13.json' lifeData={_caterer_on_beluchenkos_p13} />
    <Page path='/oscillator/caterer-on-figure-eight.json' lifeData={_caterer_on_figure_eight} />
    <Page path='/oscillator/caterer-on-jasons-p22.json' lifeData={_caterer_on_jasons_p22} />
    <Page path='/oscillator/caterer-on-merzenichs-p31.json' lifeData={_caterer_on_merzenichs_p31} />
    <Page path='/oscillator/caterer-on-rattlesnake.json' lifeData={_caterer_on_rattlesnake} />
    <Page path='/oscillator/caterer.json' lifeData={_caterer} />
    <Page path='/oscillator/cis-beacon-down-on-long-hook.json' lifeData={_cis_beacon_down_on_long_hook} />
    <Page path='/oscillator/cis-beacon-on-anvil.json' lifeData={_cis_beacon_on_anvil} />
    <Page path='/oscillator/cis-beacon-on-cap.json' lifeData={_cis_beacon_on_cap} />
    <Page path='/oscillator/cis-beacon-on-dock.json' lifeData={_cis_beacon_on_dock} />
    <Page path='/oscillator/cis-beacon-on-table.json' lifeData={_cis_beacon_on_table} />
    <Page path='/oscillator/cis-beacon-up-on-long-hook.json' lifeData={_cis_beacon_up_on_long_hook} />
    <Page path='/oscillator/cis-boat-on-long-hook-eating-tub.json' lifeData={_cis_boat_on_long_hook_eating_tub} />
    <Page path='/oscillator/claw-test-tube-baby.json' lifeData={_claw_test_tube_baby} />
    <Page path='/oscillator/coes-p8.json' lifeData={_coes_p8} />
    <Page path='/oscillator/confused-eaters.json' lifeData={_confused_eaters} />
    <Page path='/oscillator/cross-2.json' lifeData={_cross_2} />
    <Page path='/oscillator/cross.json' lifeData={_cross} />
    <Page path='/oscillator/crown.json' lifeData={_crown} />
    <Page path='/oscillator/david-hilbert.json' lifeData={_david_hilbert} />
    <Page path='/oscillator/dinner-table.json' lifeData={_dinner_table} />
    <Page path='/oscillator/double-caterer.json' lifeData={_double_caterer} />
    <Page path='/oscillator/double-ewe.json' lifeData={_double_ewe} />
    <Page path='/oscillator/dueling-banjos.json' lifeData={_dueling_banjos} />
    <Page path='/oscillator/eater-block-frob.json' lifeData={_eater_block_frob} />
    <Page path='/oscillator/eater-plug.json' lifeData={_eater_plug} />
    <Page path='/oscillator/electric-fence.json' lifeData={_electric_fence} />
    <Page path='/oscillator/elkies-p5.json' lifeData={_elkies_p5} />
    <Page path='/oscillator/ellison-p4-HW-emulator-hybrid.json' lifeData={_ellison_p4_HW_emulator_hybrid} />
    <Page path='/oscillator/ellison-p4-HW-emulator.json' lifeData={_ellison_p4_HW_emulator} />
    <Page path='/oscillator/extremely-impressive.json' lifeData={_extremely_impressive} />
    <Page path='/oscillator/figure-eight-on-22P36.json' lifeData={_figure_eight_on_22P36} />
    <Page path='/oscillator/figure-eight-on-beluchenkos-p13.json' lifeData={_figure_eight_on_beluchenkos_p13} />
    <Page path='/oscillator/figure-eight-on-jasons-p22.json' lifeData={_figure_eight_on_jasons_p22} />
    <Page path='/oscillator/figure-eight-on-pentadecathlon.json' lifeData={_figure_eight_on_pentadecathlon} />
    <Page path='/oscillator/figure-eight-on-rattlesnake.json' lifeData={_figure_eight_on_rattlesnake} />
    <Page path='/oscillator/figure-eight.json' lifeData={_figure_eight} />
    <Page path='/oscillator/fire-spitting.json' lifeData={_fire_spitting} />
    <Page path='/oscillator/fountain.json' lifeData={_fountain} />
    <Page path='/oscillator/four-eaters-hassling-four-bookends.json' lifeData={_four_eaters_hassling_four_bookends} />
    <Page path='/oscillator/four-eaters-hassling-lumps-of-muck.json' lifeData={_four_eaters_hassling_lumps_of_muck} />
    <Page path='/oscillator/four-molds-hassling-eight-blocks.json' lifeData={_four_molds_hassling_eight_blocks} />
    <Page path='/oscillator/fox.json' lifeData={_fox} />
    <Page path='/oscillator/french-kiss.json' lifeData={_french_kiss} />
    <Page path='/oscillator/fumarole-on-34P14-shuttle.json' lifeData={_fumarole_on_34P14_shuttle} />
    <Page path='/oscillator/fumarole-on-achims-p11.json' lifeData={_fumarole_on_achims_p11} />
    <Page path='/oscillator/fumarole-on-beluchenkos-p13.json' lifeData={_fumarole_on_beluchenkos_p13} />
    <Page path='/oscillator/fumarole-on-p18-bi-block-hassler.json' lifeData={_fumarole_on_p18_bi_block_hassler} />
    <Page path='/oscillator/fumarole-on-richs-p16.json' lifeData={_fumarole_on_richs_p16} />
    <Page path='/oscillator/fumarole-on-robs-p16.json' lifeData={_fumarole_on_robs_p16} />
    <Page path='/oscillator/fumarole.json' lifeData={_fumarole} />
    <Page path='/oscillator/gabriels-p138.json' lifeData={_gabriels_p138} />
    <Page path='/oscillator/glasses.json' lifeData={_glasses} />
    <Page path='/oscillator/griddle/beehive-on-griddle.json' lifeData={_beehive_on_griddle} />
    <Page path='/oscillator/griddle/block-on-griddle.json' lifeData={_block_on_griddle} />
    <Page path='/oscillator/griddle/blocks-on-griddle.json' lifeData={_blocks_on_griddle} />
    <Page path='/oscillator/griddle/boat-on-griddle.json' lifeData={_boat_on_griddle} />
    <Page path='/oscillator/griddle/by-flops.json' lifeData={_by_flops} />
    <Page path='/oscillator/griddle/griddle-and-dock.json' lifeData={_griddle_and_dock} />
    <Page path='/oscillator/griddle/griddle-and-table.json' lifeData={_griddle_and_table} />
    <Page path='/oscillator/harbor.json' lifeData={_harbor} />
    <Page path='/oscillator/heart.json' lifeData={_heart} />
    <Page path='/oscillator/heavyweight-emulator.json' lifeData={_heavyweight_emulator} />
    <Page path='/oscillator/heavyweight-volcano.json' lifeData={_heavyweight_volcano} />
    <Page path='/oscillator/hebdarole.json' lifeData={_hebdarole} />
    <Page path='/oscillator/hive-test-tube-baby.json' lifeData={_hive_test_tube_baby} />
    <Page path='/oscillator/honey-thieves-with-test-tube-baby.json' lifeData={_honey_thieves_with_test_tube_baby} />
    <Page path='/oscillator/honey-thieves.json' lifeData={_honey_thieves} />
    <Page path='/oscillator/hook-test-tube-baby.json' lifeData={_hook_test_tube_baby} />
    <Page path='/oscillator/hooks.json' lifeData={_hooks} />
    <Page path='/oscillator/jack.json' lifeData={_jack} />
    <Page path='/oscillator/jam.json' lifeData={_jam} />
    <Page path='/oscillator/jasons-p11.json' lifeData={_jasons_p11} />
    <Page path='/oscillator/jasons-p156.json' lifeData={_jasons_p156} />
    <Page path='/oscillator/jasons-p22.json' lifeData={_jasons_p22} />
    <Page path='/oscillator/jasons-p33.json' lifeData={_jasons_p33} />
    <Page path='/oscillator/jasons-p36.json' lifeData={_jasons_p36} />
    <Page path='/oscillator/jasons-p6.json' lifeData={_jasons_p6} />
    <Page path='/oscillator/jolson.json' lifeData={_jolson} />
    <Page path='/oscillator/karels-p15.json' lifeData={_karels_p15} />
    <Page path='/oscillator/karels-p177.json' lifeData={_karels_p177} />
    <Page path='/oscillator/karels-p28.json' lifeData={_karels_p28} />
    <Page path='/oscillator/koks-galaxy.json' lifeData={_koks_galaxy} />
    <Page path='/oscillator/laputa.json' lifeData={_laputa} />
    <Page path='/oscillator/lei.json' lifeData={_lei} />
    <Page path='/oscillator/light-speed-oscillator-1.json' lifeData={_light_speed_oscillator_1} />
    <Page path='/oscillator/light-speed-oscillator-2.json' lifeData={_light_speed_oscillator_2} />
    <Page path='/oscillator/light-speed-oscillator-3.json' lifeData={_light_speed_oscillator_3} />
    <Page path='/oscillator/lightweight-emulator.json' lifeData={_lightweight_emulator} />
    <Page path='/oscillator/loaf-test-tube-baby.json' lifeData={_loaf_test_tube_baby} />
    <Page path='/oscillator/loaflipflop.json' lifeData={_loaflipflop} />
    <Page path='/oscillator/mangled-1-beacon.json' lifeData={_mangled_1_beacon} />
    <Page path='/oscillator/mango-test-tube-baby.json' lifeData={_mango_test_tube_baby} />
    <Page path='/oscillator/mazing.json' lifeData={_mazing} />
    <Page path='/oscillator/merzenichs-p11.json' lifeData={_merzenichs_p11} />
    <Page path='/oscillator/merzenichs-p31.json' lifeData={_merzenichs_p31} />
    <Page path='/oscillator/merzenichs-p64.json' lifeData={_merzenichs_p64} />
    <Page path='/oscillator/middleweight-emulator.json' lifeData={_middleweight_emulator} />
    <Page path='/oscillator/middleweight-volcano.json' lifeData={_middleweight_volcano} />
    <Page path='/oscillator/mold-on-34P14-shuttle.json' lifeData={_mold_on_34P14_shuttle} />
    <Page path='/oscillator/mold-on-41P7_2.json' lifeData={_mold_on_41P7_2} />
    <Page path='/oscillator/mold-on-fumarole.json' lifeData={_mold_on_fumarole} />
    <Page path='/oscillator/mold-on-jasons-p22.json' lifeData={_mold_on_jasons_p22} />
    <Page path='/oscillator/mold-on-long-hook-eating-tub.json' lifeData={_mold_on_long_hook_eating_tub} />
    <Page path='/oscillator/mold-on-merzenichs-p31.json' lifeData={_mold_on_merzenichs_p31} />
    <Page path='/oscillator/mold-on-pentadecathlon.json' lifeData={_mold_on_pentadecathlon} />
    <Page path='/oscillator/mold-on-rattlesnake.json' lifeData={_mold_on_rattlesnake} />
    <Page path='/oscillator/mold.json' lifeData={_mold} />
    <Page path='/oscillator/monoclaw-test-tube-baby.json' lifeData={_monoclaw_test_tube_baby} />
    <Page path='/oscillator/monogram.json' lifeData={_monogram} />
    <Page path='/oscillator/montana.json' lifeData={_montana} />
    <Page path='/oscillator/muttering-moat/14P2_1.json' lifeData={_14P2_1} />
    <Page path='/oscillator/muttering-moat/bipole-tie-pseudo-barberpole.json' lifeData={_bipole_tie_pseudo_barberpole} />
    <Page path='/oscillator/muttering-moat/bipole-tie-ship.json' lifeData={_bipole_tie_ship} />
    <Page path='/oscillator/muttering-moat/bipole-tie-snake.json' lifeData={_bipole_tie_snake} />
    <Page path='/oscillator/muttering-moat/bipole.json' lifeData={_bipole} />
    <Page path='/oscillator/muttering-moat/blinker.json' lifeData={_blinker} />
    <Page path='/oscillator/muttering-moat/boat-tie-bipole.json' lifeData={_boat_tie_bipole} />
    <Page path='/oscillator/muttering-moat/boat-tie-tripole.json' lifeData={_boat_tie_tripole} />
    <Page path='/oscillator/muttering-moat/carrier-tie-bipole.json' lifeData={_carrier_tie_bipole} />
    <Page path='/oscillator/muttering-moat/cha-cha.json' lifeData={_cha_cha} />
    <Page path='/oscillator/muttering-moat/circle-of-fire.json' lifeData={_circle_of_fire} />
    <Page path='/oscillator/muttering-moat/clock.json' lifeData={_clock} />
    <Page path='/oscillator/muttering-moat/cuphook.json' lifeData={_cuphook} />
    <Page path='/oscillator/muttering-moat/cyclic.json' lifeData={_cyclic} />
    <Page path='/oscillator/muttering-moat/decapole.json' lifeData={_decapole} />
    <Page path='/oscillator/muttering-moat/duodecapole.json' lifeData={_duodecapole} />
    <Page path='/oscillator/muttering-moat/gray-counter.json' lifeData={_gray_counter} />
    <Page path='/oscillator/muttering-moat/heptapole.json' lifeData={_heptapole} />
    <Page path='/oscillator/muttering-moat/hexapole.json' lifeData={_hexapole} />
    <Page path='/oscillator/muttering-moat/muttering-moat-1.json' lifeData={_muttering_moat_1} />
    <Page path='/oscillator/muttering-moat/nonapole.json' lifeData={_nonapole} />
    <Page path='/oscillator/muttering-moat/octapole.json' lifeData={_octapole} />
    <Page path='/oscillator/octagon-2.json' lifeData={_octagon_2} />
    <Page path='/oscillator/octagon-4.json' lifeData={_octagon_4} />
    <Page path='/oscillator/odd-keys.json' lifeData={_odd_keys} />
    <Page path='/oscillator/odd-test-tube-baby.json' lifeData={_odd_test_tube_baby} />
    <Page path='/oscillator/overweight-emulator.json' lifeData={_overweight_emulator} />
    <Page path='/oscillator/pulsar.json' lifeData={_pulsar} />
    <Page path='/oscillator/relay/106P135.json' lifeData={_106P135} />
    <Page path='/oscillator/relay/6-bits.json' lifeData={_6_bits} />
    <Page path='/oscillator/relay/double-x.json' lifeData={_double_x} />
    <Page path='/oscillator/relay/hectic.json' lifeData={_hectic} />
    <Page path='/oscillator/relay/metamorphosis-II.json' lifeData={_metamorphosis_II} />
    <Page path='/oscillator/shuttle/34P14-shuttle.json' lifeData={_34P14_shuttle} />
    <Page path='/oscillator/shuttle/carnival-shuttle.json' lifeData={_carnival_shuttle} />
    <Page path='/oscillator/shuttle/centinal.json' lifeData={_centinal} />
    <Page path='/oscillator/shuttle/diuresis.json' lifeData={_diuresis} />
    <Page path='/oscillator/shuttle/eureka.json' lifeData={_eureka} />
    <Page path='/oscillator/shuttle/gourmet.json' lifeData={_gourmet} />
    <Page path='/oscillator/shuttle/newshuttle.json' lifeData={_newshuttle} />
    <Page path='/oscillator/t-nose/blocked-p4-t-nose-hybrid.json' lifeData={_blocked_p4_t_nose_hybrid} />
    <Page path='/oscillator/t-nose/blocked-p4-t-nose.json' lifeData={_blocked_p4_t_nose} />
    <Page path='/oscillator/toad.json' lifeData={_toad} />
    <Page path='/still-life/eater/7x9-eater.json' lifeData={_7x9_eater} />
    <Page path='/still-life/eater/century-eater.json' lifeData={_century_eater} />
    <Page path='/still-life/eater/eater-1.json' lifeData={_eater_1} />
    <Page path='/still-life/eater/eater-2.json' lifeData={_eater_2} />
    <Page path='/still-life/eater/eater-3.json' lifeData={_eater_3} />
    <Page path='/still-life/eater/eater-4.json' lifeData={_eater_4} />
    <Page path='/still-life/eater/sidesnagger.json' lifeData={_sidesnagger} />
    <Page path='/still-life/eater/tub-with-tail-eater.json' lifeData={_tub_with_tail_eater} />
    <Page path='/still-life/pseudo-still-life/bi-block.json' lifeData={_bi_block} />
    <Page path='/still-life/pseudo-still-life/bi-boat.json' lifeData={_bi_boat} />
    <Page path='/still-life/pseudo-still-life/block-on-boat.json' lifeData={_block_on_boat} />
    <Page path='/still-life/pseudo-still-life/pond-on-pond.json' lifeData={_pond_on_pond} />
    <Page path='/still-life/pseudo-still-life/quad-pseudo-still-life.json' lifeData={_quad_pseudo_still_life} />
    <Page path='/still-life/pseudo-still-life/triple-pseudo-still-life.json' lifeData={_triple_pseudo_still_life} />
    <Page path='/still-life/strict-still-life/15-bent-paperclip.json' lifeData={_15_bent_paperclip} />
    <Page path='/still-life/strict-still-life/29-bit-still-life-no1.json' lifeData={_29_bit_still_life_no1} />
    <Page path='/still-life/strict-still-life/31_4.json' lifeData={_31_4} />
    <Page path='/still-life/strict-still-life/aircraft-carrier.json' lifeData={_aircraft_carrier} />
    <Page path='/still-life/strict-still-life/amphisbaena.json' lifeData={_amphisbaena} />
    <Page path='/still-life/strict-still-life/aries-betwixt-two-blocks.json' lifeData={_aries_betwixt_two_blocks} />
    <Page path='/still-life/strict-still-life/asymmetric-amphisbaena.json' lifeData={_asymmetric_amphisbaena} />
    <Page path='/still-life/strict-still-life/barge-siamese-loaf.json' lifeData={_barge_siamese_loaf} />
    <Page path='/still-life/strict-still-life/barge-with-long-tail.json' lifeData={_barge_with_long_tail} />
    <Page path='/still-life/strict-still-life/barge-with-very-long-tail.json' lifeData={_barge_with_very_long_tail} />
    <Page path='/still-life/strict-still-life/barge.json' lifeData={_barge} />
    <Page path='/still-life/strict-still-life/bee-hat.json' lifeData={_bee_hat} />
    <Page path='/still-life/strict-still-life/beehive-at-beehive.json' lifeData={_beehive_at_beehive} />
    <Page path='/still-life/strict-still-life/beehive-at-claw.json' lifeData={_beehive_at_claw} />
    <Page path='/still-life/strict-still-life/beehive-at-loaf.json' lifeData={_beehive_at_loaf} />
    <Page path='/still-life/strict-still-life/beehive-on-cap.json' lifeData={_beehive_on_cap} />
    <Page path='/still-life/strict-still-life/beehive-on-dock.json' lifeData={_beehive_on_dock} />
    <Page path='/still-life/strict-still-life/beehive-on-table.json' lifeData={_beehive_on_table} />
    <Page path='/still-life/strict-still-life/beehive-with-bend-tail.json' lifeData={_beehive_with_bend_tail} />
    <Page path='/still-life/strict-still-life/beehive-with-nine.json' lifeData={_beehive_with_nine} />
    <Page path='/still-life/strict-still-life/beehive-with-tail.json' lifeData={_beehive_with_tail} />
    <Page path='/still-life/strict-still-life/beehive.json' lifeData={_beehive} />
    <Page path='/still-life/strict-still-life/bi-cap.json' lifeData={_bi_cap} />
    <Page path='/still-life/strict-still-life/bi-loaf2.json' lifeData={_bi_loaf2} />
    <Page path='/still-life/strict-still-life/bi-pond.json' lifeData={_bi_pond} />
    <Page path='/still-life/strict-still-life/big-s.json' lifeData={_big_s} />
    <Page path='/still-life/strict-still-life/block-on-cap.json' lifeData={_block_on_cap} />
    <Page path='/still-life/strict-still-life/block-on-cover.json' lifeData={_block_on_cover} />
    <Page path='/still-life/strict-still-life/block-on-dock.json' lifeData={_block_on_dock} />
    <Page path='/still-life/strict-still-life/block-on-table.json' lifeData={_block_on_table} />
    <Page path='/still-life/strict-still-life/block.json' lifeData={_block} />
    <Page path='/still-life/strict-still-life/boat-tie-eater-head.json' lifeData={_boat_tie_eater_head} />
    <Page path='/still-life/strict-still-life/boat-tie-eater-tail.json' lifeData={_boat_tie_eater_tail} />
    <Page path='/still-life/strict-still-life/boat-tie-long-boat.json' lifeData={_boat_tie_long_boat} />
    <Page path='/still-life/strict-still-life/boat-tie-long-snake.json' lifeData={_boat_tie_long_snake} />
    <Page path='/still-life/strict-still-life/boat-tie-ship.json' lifeData={_boat_tie_ship} />
    <Page path='/still-life/strict-still-life/boat-tie-snake.json' lifeData={_boat_tie_snake} />
    <Page path='/still-life/strict-still-life/boat-tie.json' lifeData={_boat_tie} />
    <Page path='/still-life/strict-still-life/boat-with-cis-tail.json' lifeData={_boat_with_cis_tail} />
    <Page path='/still-life/strict-still-life/boat-with-hooked-tail.json' lifeData={_boat_with_hooked_tail} />
    <Page path='/still-life/strict-still-life/boat-with-long-tail.json' lifeData={_boat_with_long_tail} />
    <Page path='/still-life/strict-still-life/boat-with-long3-tail.json' lifeData={_boat_with_long3_tail} />
    <Page path='/still-life/strict-still-life/boat-with-very-long-tail.json' lifeData={_boat_with_very_long_tail} />
    <Page path='/still-life/strict-still-life/boat.json' lifeData={_boat} />
    <Page path='/still-life/strict-still-life/bookend-table-snake.json' lifeData={_bookend_table_snake} />
    <Page path='/still-life/strict-still-life/bookends-siamese-tables.json' lifeData={_bookends_siamese_tables} />
    <Page path='/still-life/strict-still-life/bookends.json' lifeData={_bookends} />
    <Page path='/still-life/strict-still-life/broken-elevener.json' lifeData={_broken_elevener} />
    <Page path='/still-life/strict-still-life/broken-snake.json' lifeData={_broken_snake} />
    <Page path='/still-life/strict-still-life/canoe-siamese-snake.json' lifeData={_canoe_siamese_snake} />
    <Page path='/still-life/strict-still-life/canoe.json' lifeData={_canoe} />
    <Page path='/still-life/strict-still-life/cap-and-dock.json' lifeData={_cap_and_dock} />
    <Page path='/still-life/strict-still-life/carrier-bridge-carrier.json' lifeData={_carrier_bridge_carrier} />
    <Page path='/still-life/strict-still-life/carrier-bridge-snake.json' lifeData={_carrier_bridge_snake} />
    <Page path='/still-life/strict-still-life/carrier-bridge-table.json' lifeData={_carrier_bridge_table} />
    <Page path='/still-life/strict-still-life/carrier-siamese-canoe.json' lifeData={_carrier_siamese_canoe} />
    <Page path='/still-life/strict-still-life/carrier-siamese-carrier.json' lifeData={_carrier_siamese_carrier} />
    <Page path='/still-life/strict-still-life/carrier-siamese-dock.json' lifeData={_carrier_siamese_dock} />
    <Page path='/still-life/strict-still-life/carrier-siamese-eater-head.json' lifeData={_carrier_siamese_eater_head} />
    <Page path='/still-life/strict-still-life/carrier-siamese-eater-tail.json' lifeData={_carrier_siamese_eater_tail} />
    <Page path='/still-life/strict-still-life/carrier-siamese-hook-with-tail-hook.json' lifeData={_carrier_siamese_hook_with_tail_hook} />
    <Page path='/still-life/strict-still-life/carrier-siamese-hook-with-tail-tail.json' lifeData={_carrier_siamese_hook_with_tail_tail} />
    <Page path='/still-life/strict-still-life/carrier-siamese-long-snake.json' lifeData={_carrier_siamese_long_snake} />
    <Page path='/still-life/strict-still-life/carrier-siamese-shillelagh.json' lifeData={_carrier_siamese_shillelagh} />
    <Page path='/still-life/strict-still-life/carrier-siamese-tub-with-tail.json' lifeData={_carrier_siamese_tub_with_tail} />
    <Page path='/still-life/strict-still-life/carrier-siamese-very-long-snake.json' lifeData={_carrier_siamese_very_long_snake} />
    <Page path='/still-life/strict-still-life/carrier-tie-boat.json' lifeData={_carrier_tie_boat} />
    <Page path='/still-life/strict-still-life/carrier-tie-ship.json' lifeData={_carrier_tie_ship} />
    <Page path='/still-life/strict-still-life/carrier-with-feather.json' lifeData={_carrier_with_feather} />
    <Page path='/still-life/strict-still-life/cis-barge-with-nine.json' lifeData={_cis_barge_with_nine} />
    <Page path='/still-life/strict-still-life/cis-barge-with-tail.json' lifeData={_cis_barge_with_tail} />
    <Page path='/still-life/strict-still-life/cis-block-on-long-hook.json' lifeData={_cis_block_on_long_hook} />
    <Page path='/still-life/strict-still-life/cis-boat-amphisbaena.json' lifeData={_cis_boat_amphisbaena} />
    <Page path='/still-life/strict-still-life/cis-boat-and-cap.json' lifeData={_cis_boat_and_cap} />
    <Page path='/still-life/strict-still-life/cis-boat-line-tub.json' lifeData={_cis_boat_line_tub} />
    <Page path='/still-life/strict-still-life/cis-boat-on-dock.json' lifeData={_cis_boat_on_dock} />
    <Page path='/still-life/strict-still-life/cis-boat-on-table.json' lifeData={_cis_boat_on_table} />
    <Page path='/still-life/strict-still-life/cis-boat-with-nine.json' lifeData={_cis_boat_with_nine} />
    <Page path='/still-life/strict-still-life/cis-boat-with-tail.json' lifeData={_cis_boat_with_tail} />
    <Page path='/still-life/strict-still-life/cis-carrier-down-on-table.json' lifeData={_cis_carrier_down_on_table} />
    <Page path='/still-life/strict-still-life/cis-carrier-tie-snake.json' lifeData={_cis_carrier_tie_snake} />
    <Page path='/still-life/strict-still-life/cis-carrier-tie.json' lifeData={_cis_carrier_tie} />
    <Page path='/still-life/strict-still-life/cis-carrier-up-on-table.json' lifeData={_cis_carrier_up_on_table} />
    <Page path='/still-life/strict-still-life/cis-fuse-with-two-tails.json' lifeData={_cis_fuse_with_two_tails} />
    <Page path='/still-life/strict-still-life/cis-hook-and-R-bee.json' lifeData={_cis_hook_and_R_bee} />
    <Page path='/still-life/strict-still-life/cis-hook-with-tail.json' lifeData={_cis_hook_with_tail} />
    <Page path='/still-life/strict-still-life/cis-loaf-with-tail.json' lifeData={_cis_loaf_with_tail} />
    <Page path='/still-life/strict-still-life/cis-long-barge-with-tail.json' lifeData={_cis_long_barge_with_tail} />
    <Page path='/still-life/strict-still-life/cis-long-boat-with-tail.json' lifeData={_cis_long_boat_with_tail} />
    <Page path='/still-life/strict-still-life/cis-mango-with-tail.json' lifeData={_cis_mango_with_tail} />
    <Page path='/still-life/strict-still-life/cis-mirrored-R-bee.json' lifeData={_cis_mirrored_R_bee} />
    <Page path='/still-life/strict-still-life/cis-mirrored-worm-siamese-cis-mirrored-worm.json' lifeData={_cis_mirrored_worm_siamese_cis_mirrored_worm} />
    <Page path='/still-life/strict-still-life/cis-mirrored-worm.json' lifeData={_cis_mirrored_worm} />
    <Page path='/still-life/strict-still-life/cis-R-bee-and-R-loaf.json' lifeData={_cis_R_bee_and_R_loaf} />
    <Page path='/still-life/strict-still-life/cis-rotated-hook.json' lifeData={_cis_rotated_hook} />
    <Page path='/still-life/strict-still-life/cis-rotated-R-bee.json' lifeData={_cis_rotated_R_bee} />
    <Page path='/still-life/strict-still-life/cis-shillelagh.json' lifeData={_cis_shillelagh} />
    <Page path='/still-life/strict-still-life/cis-ship-on-table.json' lifeData={_cis_ship_on_table} />
    <Page path='/still-life/strict-still-life/cis-snake-tie.json' lifeData={_cis_snake_tie} />
    <Page path='/still-life/strict-still-life/claw-siamese-tub-with-cape.json' lifeData={_claw_siamese_tub_with_cape} />
    <Page path='/still-life/strict-still-life/claw-with-boat-with-tail.json' lifeData={_claw_with_boat_with_tail} />
    <Page path='/still-life/strict-still-life/claw-with-tail.json' lifeData={_claw_with_tail} />
    <Page path='/still-life/strict-still-life/claw-with-tub-with-tail.json' lifeData={_claw_with_tub_with_tail} />
    <Page path='/still-life/strict-still-life/clips.json' lifeData={_clips} />
    <Page path='/still-life/strict-still-life/cloverleaf-interchange.json' lifeData={_cloverleaf_interchange} />
    <Page path='/still-life/strict-still-life/cthulhu.json' lifeData={_cthulhu} />
    <Page path='/still-life/strict-still-life/dead-spark-coil.json' lifeData={_dead_spark_coil} />
    <Page path='/still-life/strict-still-life/dock-and-long-hook.json' lifeData={_dock_and_long_hook} />
    <Page path='/still-life/strict-still-life/double-claw.json' lifeData={_double_claw} />
    <Page path='/still-life/strict-still-life/down-snake-on-table.json' lifeData={_down_snake_on_table} />
    <Page path='/still-life/strict-still-life/eater-bridge-eater.json' lifeData={_eater_bridge_eater} />
    <Page path='/still-life/strict-still-life/eater-head-siamese-eater-head.json' lifeData={_eater_head_siamese_eater_head} />
    <Page path='/still-life/strict-still-life/eater-head-siamese-eater-tail.json' lifeData={_eater_head_siamese_eater_tail} />
    <Page path='/still-life/strict-still-life/eater-head-siamese-long-snake.json' lifeData={_eater_head_siamese_long_snake} />
    <Page path='/still-life/strict-still-life/eater-head-siamese-snake.json' lifeData={_eater_head_siamese_snake} />
    <Page path='/still-life/strict-still-life/eater-tail-siamese-eater-tail.json' lifeData={_eater_tail_siamese_eater_tail} />
    <Page path='/still-life/strict-still-life/eater-tail-siamese-long-snake.json' lifeData={_eater_tail_siamese_long_snake} />
    <Page path='/still-life/strict-still-life/eater-tail-siamese-snake.json' lifeData={_eater_tail_siamese_snake} />
    <Page path='/still-life/strict-still-life/eater-with-cape.json' lifeData={_eater_with_cape} />
    <Page path='/still-life/strict-still-life/eater-with-head-feather.json' lifeData={_eater_with_head_feather} />
    <Page path='/still-life/strict-still-life/eater-with-tail-feather.json' lifeData={_eater_with_tail_feather} />
    <Page path='/still-life/strict-still-life/egyptian-walk.json' lifeData={_egyptian_walk} />
    <Page path='/still-life/strict-still-life/eleven-loop.json' lifeData={_eleven_loop} />
    <Page path='/still-life/strict-still-life/elevener.json' lifeData={_elevener} />
    <Page path='/still-life/strict-still-life/fourteener.json' lifeData={_fourteener} />
    <Page path='/still-life/strict-still-life/fuse-with-tail-and-integral.json' lifeData={_fuse_with_tail_and_integral} />
    <Page path='/still-life/strict-still-life/fuse-with-tail-and-long-tail.json' lifeData={_fuse_with_tail_and_long_tail} />
    <Page path='/still-life/strict-still-life/fuse-with-tail-and-very-long-tail.json' lifeData={_fuse_with_tail_and_very_long_tail} />
    <Page path='/still-life/strict-still-life/fuse-with-two-long-tails.json' lifeData={_fuse_with_two_long_tails} />
    <Page path='/still-life/strict-still-life/grin-reagent.json' lifeData={_grin_reagent} />
    <Page path='/still-life/strict-still-life/gull-with-tub.json' lifeData={_gull_with_tub} />
    <Page path='/still-life/strict-still-life/half-bakery.json' lifeData={_half_bakery} />
    <Page path='/still-life/strict-still-life/hat-siamese-vase.json' lifeData={_hat_siamese_vase} />
    <Page path='/still-life/strict-still-life/hat.json' lifeData={_hat} />
    <Page path='/still-life/strict-still-life/hexagonal-key.json' lifeData={_hexagonal_key} />
    <Page path='/still-life/strict-still-life/honeybarge.json' lifeData={_honeybarge} />
    <Page path='/still-life/strict-still-life/honeycomb.json' lifeData={_honeycomb} />
    <Page path='/still-life/strict-still-life/hook-with-nine.json' lifeData={_hook_with_nine} />
    <Page path='/still-life/strict-still-life/hook-with-tail-hook-siamese-snake.json' lifeData={_hook_with_tail_hook_siamese_snake} />
    <Page path='/still-life/strict-still-life/hook-with-tail-tail-siamese-snake.json' lifeData={_hook_with_tail_tail_siamese_snake} />
    <Page path='/still-life/strict-still-life/hook-with-tail-with-cape.json' lifeData={_hook_with_tail_with_cape} />
    <Page path='/still-life/strict-still-life/hook-with-tail.json' lifeData={_hook_with_tail} />
    <Page path='/still-life/strict-still-life/hook-with-two-tails.json' lifeData={_hook_with_two_tails} />
    <Page path='/still-life/strict-still-life/house-on-house-siamese-table-on-table-weld-hat-siamese-hat.json' lifeData={_house_on_house_siamese_table_on_table_weld_hat_siamese_hat} />
    <Page path='/still-life/strict-still-life/hungry-hat.json' lifeData={_hungry_hat} />
    <Page path='/still-life/strict-still-life/inflected-clips.json' lifeData={_inflected_clips} />
    <Page path='/still-life/strict-still-life/inflected-long-snake.json' lifeData={_inflected_long_snake} />
    <Page path='/still-life/strict-still-life/inflexion.json' lifeData={_inflexion} />
    <Page path='/still-life/strict-still-life/integral-sign.json' lifeData={_integral_sign} />
    <Page path='/still-life/strict-still-life/integral-with-cis-hook.json' lifeData={_integral_with_cis_hook} />
    <Page path='/still-life/strict-still-life/integral-with-hook-and-tail.json' lifeData={_integral_with_hook_and_tail} />
    <Page path='/still-life/strict-still-life/integral-with-hook.json' lifeData={_integral_with_hook} />
    <Page path='/still-life/strict-still-life/integral-with-long-hook-and-tub.json' lifeData={_integral_with_long_hook_and_tub} />
    <Page path='/still-life/strict-still-life/integral-with-long-hook.json' lifeData={_integral_with_long_hook} />
    <Page path='/still-life/strict-still-life/integral-with-tub-and-hook.json' lifeData={_integral_with_tub_and_hook} />
    <Page path='/still-life/strict-still-life/integral-with-tub-and-tail.json' lifeData={_integral_with_tub_and_tail} />
    <Page path='/still-life/strict-still-life/integral-with-tub.json' lifeData={_integral_with_tub} />
    <Page path='/still-life/strict-still-life/integral-with-two-tubs.json' lifeData={_integral_with_two_tubs} />
    <Page path='/still-life/strict-still-life/integral-with-very-long-hook.json' lifeData={_integral_with_very_long_hook} />
    <Page path='/still-life/strict-still-life/inverted-double-claw.json' lifeData={_inverted_double_claw} />
    <Page path='/still-life/strict-still-life/lake2.json' lifeData={_lake2} />
    <Page path='/still-life/strict-still-life/loaf-back-tie-loaf.json' lifeData={_loaf_back_tie_loaf} />
    <Page path='/still-life/strict-still-life/loaf-siamese-loaf.json' lifeData={_loaf_siamese_loaf} />
    <Page path='/still-life/strict-still-life/loaf-tie-eater-with-tail.json' lifeData={_loaf_tie_eater_with_tail} />
    <Page path='/still-life/strict-still-life/loaf.json' lifeData={_loaf} />
    <Page path='/still-life/strict-still-life/long-barge.json' lifeData={_long_barge} />
    <Page path='/still-life/strict-still-life/long-boat-tie-ship.json' lifeData={_long_boat_tie_ship} />
    <Page path='/still-life/strict-still-life/long-boat-with-long-tail.json' lifeData={_long_boat_with_long_tail} />
    <Page path='/still-life/strict-still-life/long-boat.json' lifeData={_long_boat} />
    <Page path='/still-life/strict-still-life/long-canoe.json' lifeData={_long_canoe} />
    <Page path='/still-life/strict-still-life/long-cis-hook-with-tail.json' lifeData={_long_cis_hook_with_tail} />
    <Page path='/still-life/strict-still-life/long-cis-shillelagh.json' lifeData={_long_cis_shillelagh} />
    <Page path='/still-life/strict-still-life/long-claw-with-tail.json' lifeData={_long_claw_with_tail} />
    <Page path='/still-life/strict-still-life/long-hook-with-tail.json' lifeData={_long_hook_with_tail} />
    <Page path='/still-life/strict-still-life/long-integral-with-boat.json' lifeData={_long_integral_with_boat} />
    <Page path='/still-life/strict-still-life/long-integral.json' lifeData={_long_integral} />
    <Page path='/still-life/strict-still-life/long-melusine.json' lifeData={_long_melusine} />
    <Page path='/still-life/strict-still-life/long-prodigal.json' lifeData={_long_prodigal} />
    <Page path='/still-life/strict-still-life/long-shillelagh.json' lifeData={_long_shillelagh} />
    <Page path='/still-life/strict-still-life/long-ship.json' lifeData={_long_ship} />
    <Page path='/still-life/strict-still-life/long-snake-siamese-long-snake.json' lifeData={_long_snake_siamese_long_snake} />
    <Page path='/still-life/strict-still-life/long-snake.json' lifeData={_long_snake} />
    <Page path='/still-life/strict-still-life/long-tub-claw-with-tail.json' lifeData={_long_tub_claw_with_tail} />
    <Page path='/still-life/strict-still-life/long10-boat.json' lifeData={_long10_boat} />
    <Page path='/still-life/strict-still-life/long10-ship.json' lifeData={_long10_ship} />
    <Page path='/still-life/strict-still-life/long3-barge.json' lifeData={_long3_barge} />
    <Page path='/still-life/strict-still-life/long3-boat.json' lifeData={_long3_boat} />
    <Page path='/still-life/strict-still-life/long3-canoe.json' lifeData={_long3_canoe} />
    <Page path='/still-life/strict-still-life/long3-hook-with-tail.json' lifeData={_long3_hook_with_tail} />
    <Page path='/still-life/strict-still-life/long3-integral.json' lifeData={_long3_integral} />
    <Page path='/still-life/strict-still-life/long3-shillelagh.json' lifeData={_long3_shillelagh} />
    <Page path='/still-life/strict-still-life/long3-ship.json' lifeData={_long3_ship} />
    <Page path='/still-life/strict-still-life/long3-snake.json' lifeData={_long3_snake} />
    <Page path='/still-life/strict-still-life/long4-barge.json' lifeData={_long4_barge} />
    <Page path='/still-life/strict-still-life/long4-boat.json' lifeData={_long4_boat} />
    <Page path='/still-life/strict-still-life/long4-canoe.json' lifeData={_long4_canoe} />
    <Page path='/still-life/strict-still-life/long4-hook-with-tail.json' lifeData={_long4_hook_with_tail} />
    <Page path='/still-life/strict-still-life/long4-shillelagh.json' lifeData={_long4_shillelagh} />
    <Page path='/still-life/strict-still-life/long4-ship.json' lifeData={_long4_ship} />
    <Page path='/still-life/strict-still-life/long4-snake.json' lifeData={_long4_snake} />
    <Page path='/still-life/strict-still-life/long5-barge.json' lifeData={_long5_barge} />
    <Page path='/still-life/strict-still-life/long5-boat.json' lifeData={_long5_boat} />
    <Page path='/still-life/strict-still-life/long5-ship.json' lifeData={_long5_ship} />
    <Page path='/still-life/strict-still-life/long5-snake.json' lifeData={_long5_snake} />
    <Page path='/still-life/strict-still-life/long6-barge.json' lifeData={_long6_barge} />
    <Page path='/still-life/strict-still-life/long6-boat.json' lifeData={_long6_boat} />
    <Page path='/still-life/strict-still-life/long6-ship.json' lifeData={_long6_ship} />
    <Page path='/still-life/strict-still-life/long6-snake.json' lifeData={_long6_snake} />
    <Page path='/still-life/strict-still-life/long7-boat.json' lifeData={_long7_boat} />
    <Page path='/still-life/strict-still-life/long7-ship.json' lifeData={_long7_ship} />
    <Page path='/still-life/strict-still-life/long8-boat.json' lifeData={_long8_boat} />
    <Page path='/still-life/strict-still-life/long8-ship.json' lifeData={_long8_ship} />
    <Page path='/still-life/strict-still-life/long9-boat.json' lifeData={_long9_boat} />
    <Page path='/still-life/strict-still-life/long9-ship.json' lifeData={_long9_ship} />
    <Page path='/still-life/strict-still-life/longhorn.json' lifeData={_longhorn} />
    <Page path='/still-life/strict-still-life/loop.json' lifeData={_loop} />
    <Page path='/still-life/strict-still-life/mango-with-block-on-dock.json' lifeData={_mango_with_block_on_dock} />
    <Page path='/still-life/strict-still-life/mango.json' lifeData={_mango} />
    <Page path='/still-life/strict-still-life/mickey-mouse.json' lifeData={_mickey_mouse} />
    <Page path='/still-life/strict-still-life/mirrored-dock.json' lifeData={_mirrored_dock} />
    <Page path='/still-life/strict-still-life/moose-antlers.json' lifeData={_moose_antlers} />
    <Page path='/still-life/strict-still-life/o-quad-loaf.json' lifeData={_o_quad_loaf} />
    <Page path='/still-life/strict-still-life/omnibus-with-tubs.json' lifeData={_omnibus_with_tubs} />
    <Page path='/still-life/strict-still-life/omnibus.json' lifeData={_omnibus} />
    <Page path='/still-life/strict-still-life/ortho-loaf-on-table.json' lifeData={_ortho_loaf_on_table} />
    <Page path='/still-life/strict-still-life/paperclip.json' lifeData={_paperclip} />
    <Page path='/still-life/strict-still-life/pond-on-dock.json' lifeData={_pond_on_dock} />
    <Page path='/still-life/strict-still-life/pond.json' lifeData={_pond} />
    <Page path='/still-life/strict-still-life/professor.json' lifeData={_professor} />
    <Page path='/still-life/strict-still-life/python-siamese-snake.json' lifeData={_python_siamese_snake} />
    <Page path='/still-life/strict-still-life/R-bee-and-snake.json' lifeData={_R_bee_and_snake} />
    <Page path='/still-life/strict-still-life/R-bee-on-beehive.json' lifeData={_R_bee_on_beehive} />
    <Page path='/still-life/strict-still-life/R-bee-with-feather.json' lifeData={_R_bee_with_feather} />
    <Page path='/still-life/strict-still-life/R-mango-and-house.json' lifeData={_R_mango_and_house} />
    <Page path='/still-life/strict-still-life/rotated-c.json' lifeData={_rotated_c} />
    <Page path='/still-life/strict-still-life/rotated-table.json' lifeData={_rotated_table} />
    <Page path='/still-life/strict-still-life/scorpion.json' lifeData={_scorpion} />
    <Page path='/still-life/strict-still-life/sesquihat.json' lifeData={_sesquihat} />
    <Page path='/still-life/strict-still-life/shillelagh-siamese-snake.json' lifeData={_shillelagh_siamese_snake} />
    <Page path='/still-life/strict-still-life/shillelagh.json' lifeData={_shillelagh} />
    <Page path='/still-life/strict-still-life/ship-tie-snake.json' lifeData={_ship_tie_snake} />
    <Page path='/still-life/strict-still-life/ship-tie.json' lifeData={_ship_tie} />
    <Page path='/still-life/strict-still-life/ship.json' lifeData={_ship} />
    <Page path='/still-life/strict-still-life/shuriken.json' lifeData={_shuriken} />
    <Page path='/still-life/strict-still-life/sidewalk.json' lifeData={_sidewalk} />
    <Page path='/still-life/strict-still-life/skew-R-bees.json' lifeData={_skew_R_bees} />
    <Page path='/still-life/strict-still-life/small-lake.json' lifeData={_small_lake} />
    <Page path='/still-life/strict-still-life/snake-bridge-snake.json' lifeData={_snake_bridge_snake} />
    <Page path='/still-life/strict-still-life/snake-siamese-snake.json' lifeData={_snake_siamese_snake} />
    <Page path='/still-life/strict-still-life/snake-siamese-very-long-snake.json' lifeData={_snake_siamese_very_long_snake} />
    <Page path='/still-life/strict-still-life/snake-with-feather.json' lifeData={_snake_with_feather} />
    <Page path='/still-life/strict-still-life/snake.json' lifeData={_snake} />
    <Page path='/still-life/strict-still-life/snorkel-loop.json' lifeData={_snorkel_loop} />
    <Page path='/still-life/strict-still-life/spiral.json' lifeData={_spiral} />
    <Page path='/still-life/strict-still-life/super-loaf.json' lifeData={_super_loaf} />
    <Page path='/still-life/strict-still-life/super-mango.json' lifeData={_super_mango} />
    <Page path='/still-life/strict-still-life/super-pond.json' lifeData={_super_pond} />
    <Page path='/still-life/strict-still-life/symmetric-scorpion.json' lifeData={_symmetric_scorpion} />
    <Page path='/still-life/strict-still-life/symmetrical-synapse.json' lifeData={_symmetrical_synapse} />
    <Page path='/still-life/strict-still-life/table-and-dock.json' lifeData={_table_and_dock} />
    <Page path='/still-life/strict-still-life/table-and-table.json' lifeData={_table_and_table} />
    <Page path='/still-life/strict-still-life/teardrop-with-cape.json' lifeData={_teardrop_with_cape} />
    <Page path='/still-life/strict-still-life/teardrop-with-claw.json' lifeData={_teardrop_with_claw} />
    <Page path='/still-life/strict-still-life/thirteen-loop.json' lifeData={_thirteen_loop} />
    <Page path='/still-life/strict-still-life/trans-barge-with-nine.json' lifeData={_trans_barge_with_nine} />
    <Page path='/still-life/strict-still-life/trans-barge-with-tail.json' lifeData={_trans_barge_with_tail} />
    <Page path='/still-life/strict-still-life/trans-block-on-long-hook.json' lifeData={_trans_block_on_long_hook} />
    <Page path='/still-life/strict-still-life/trans-boat-amphisbaena.json' lifeData={_trans_boat_amphisbaena} />
    <Page path='/still-life/strict-still-life/trans-boat-line-tub.json' lifeData={_trans_boat_line_tub} />
    <Page path='/still-life/strict-still-life/trans-boat-on-dock.json' lifeData={_trans_boat_on_dock} />
    <Page path='/still-life/strict-still-life/trans-boat-on-table.json' lifeData={_trans_boat_on_table} />
    <Page path='/still-life/strict-still-life/trans-boat-with-nine.json' lifeData={_trans_boat_with_nine} />
    <Page path='/still-life/strict-still-life/trans-boat-with-tail.json' lifeData={_trans_boat_with_tail} />
    <Page path='/still-life/strict-still-life/trans-carrier-down-on-table.json' lifeData={_trans_carrier_down_on_table} />
    <Page path='/still-life/strict-still-life/trans-carrier-tie-snake.json' lifeData={_trans_carrier_tie_snake} />
    <Page path='/still-life/strict-still-life/trans-carrier-tie.json' lifeData={_trans_carrier_tie} />
    <Page path='/still-life/strict-still-life/trans-carrier-up-on-table.json' lifeData={_trans_carrier_up_on_table} />
    <Page path='/still-life/strict-still-life/trans-fuse-with-two-tails.json' lifeData={_trans_fuse_with_two_tails} />
    <Page path='/still-life/strict-still-life/trans-hook-and-R-bee.json' lifeData={_trans_hook_and_R_bee} />
    <Page path='/still-life/strict-still-life/trans-loaf-with-tail.json' lifeData={_trans_loaf_with_tail} />
    <Page path='/still-life/strict-still-life/trans-long-barge-with-tail.json' lifeData={_trans_long_barge_with_tail} />
    <Page path='/still-life/strict-still-life/trans-long-boat-with-tail.json' lifeData={_trans_long_boat_with_tail} />
    <Page path='/still-life/strict-still-life/trans-mango-with-tail.json' lifeData={_trans_mango_with_tail} />
    <Page path='/still-life/strict-still-life/trans-mirrored-R-bee.json' lifeData={_trans_mirrored_R_bee} />
    <Page path='/still-life/strict-still-life/trans-R-bee-and-R-loaf.json' lifeData={_trans_R_bee_and_R_loaf} />
    <Page path='/still-life/strict-still-life/trans-rotated-R-bee.json' lifeData={_trans_rotated_R_bee} />
    <Page path='/still-life/strict-still-life/trans-ship-on-table.json' lifeData={_trans_ship_on_table} />
    <Page path='/still-life/strict-still-life/trans-snake-tie.json' lifeData={_trans_snake_tie} />
    <Page path='/still-life/strict-still-life/tub-bend-line-tub.json' lifeData={_tub_bend_line_tub} />
    <Page path='/still-life/strict-still-life/tub-with-cis-tail.json' lifeData={_tub_with_cis_tail} />
    <Page path='/still-life/strict-still-life/tub-with-long-cis-tail.json' lifeData={_tub_with_long_cis_tail} />
    <Page path='/still-life/strict-still-life/tub-with-long-tail.json' lifeData={_tub_with_long_tail} />
    <Page path='/still-life/strict-still-life/tub-with-long3-tail.json' lifeData={_tub_with_long3_tail} />
    <Page path='/still-life/strict-still-life/tub-with-long4-tail.json' lifeData={_tub_with_long4_tail} />
    <Page path='/still-life/strict-still-life/tub-with-tail-siamese-snake.json' lifeData={_tub_with_tail_siamese_snake} />
    <Page path='/still-life/strict-still-life/tub-with-tail-with-cape.json' lifeData={_tub_with_tail_with_cape} />
    <Page path='/still-life/strict-still-life/tub-with-tail.json' lifeData={_tub_with_tail} />
    <Page path='/still-life/strict-still-life/tub-with-two-down-cis-tails.json' lifeData={_tub_with_two_down_cis_tails} />
    <Page path='/still-life/strict-still-life/tub-with-two-down-trans-tails.json' lifeData={_tub_with_two_down_trans_tails} />
    <Page path='/still-life/strict-still-life/tub-with-two-up-cis-tails.json' lifeData={_tub_with_two_up_cis_tails} />
    <Page path='/still-life/strict-still-life/tub-with-two-up-trans-tails.json' lifeData={_tub_with_two_up_trans_tails} />
    <Page path='/still-life/strict-still-life/tub-with-very-long-tail.json' lifeData={_tub_with_very_long_tail} />
    <Page path='/still-life/strict-still-life/tub.json' lifeData={_tub} />
    <Page path='/still-life/strict-still-life/twelve-loop.json' lifeData={_twelve_loop} />
    <Page path='/still-life/strict-still-life/twin-hat.json' lifeData={_twin_hat} />
    <Page path='/still-life/strict-still-life/up-dove-on-dove.json' lifeData={_up_dove_on_dove} />
    <Page path='/still-life/strict-still-life/up-snake-on-table.json' lifeData={_up_snake_on_table} />
    <Page path='/still-life/strict-still-life/up-wing-on-wing.json' lifeData={_up_wing_on_wing} />
    <Page path='/still-life/strict-still-life/very-long-barge.json' lifeData={_very_long_barge} />
    <Page path='/still-life/strict-still-life/very-long-boat.json' lifeData={_very_long_boat} />
    <Page path='/still-life/strict-still-life/very-long-canoe.json' lifeData={_very_long_canoe} />
    <Page path='/still-life/strict-still-life/very-long-cis-hook-with-tail.json' lifeData={_very_long_cis_hook_with_tail} />
    <Page path='/still-life/strict-still-life/very-long-cis-shillelagh.json' lifeData={_very_long_cis_shillelagh} />
    <Page path='/still-life/strict-still-life/very-long-claw-with-tail.json' lifeData={_very_long_claw_with_tail} />
    <Page path='/still-life/strict-still-life/very-long-hook-with-tail.json' lifeData={_very_long_hook_with_tail} />
    <Page path='/still-life/strict-still-life/very-long-integral.json' lifeData={_very_long_integral} />
    <Page path='/still-life/strict-still-life/very-long-melusine.json' lifeData={_very_long_melusine} />
    <Page path='/still-life/strict-still-life/very-long-prodigal.json' lifeData={_very_long_prodigal} />
    <Page path='/still-life/strict-still-life/very-long-shillelagh.json' lifeData={_very_long_shillelagh} />
    <Page path='/still-life/strict-still-life/very-long-ship.json' lifeData={_very_long_ship} />
    <Page path='/still-life/strict-still-life/very-long-snake.json' lifeData={_very_long_snake} />
    <Page path='/still-life/strict-still-life/z-quad-loaf.json' lifeData={_z_quad_loaf} />
  </Router>
), document.getElementById('app'));
