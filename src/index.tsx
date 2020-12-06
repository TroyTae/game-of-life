
import { h, render } from 'preact';
import Router from 'preact-router';
import { Link } from 'preact-router/match';
import Pattern from './pattern';

import _1_beacon from '../life/oscillator/1-beacon.json';
import _101 from '../life/oscillator/101.json';
import _110P62 from '../life/oscillator/110P62.json';
import _112P15 from '../life/oscillator/112P15.json';
import _117P18 from '../life/oscillator/117P18.json';
import _124P21 from '../life/oscillator/124P21.json';
import _128P10_2 from '../life/oscillator/128P10_2.json';
import _134P25 from '../life/oscillator/134P25.json';
import _134P39_1 from '../life/oscillator/134P39_1.json';
import _144P24 from '../life/oscillator/144P24.json';
import _145P20 from '../life/oscillator/145P20.json';
import _14P2_3 from '../life/oscillator/14P2_3.json';
import _14P2_4 from '../life/oscillator/14P2_4.json';
import _168P22_1 from '../life/oscillator/168P22_1.json';
import _186P24 from '../life/oscillator/186P24.json';
import _209P8 from '../life/oscillator/209P8.json';
import _20P2 from '../life/oscillator/20P2.json';
import _21P2 from '../life/oscillator/21P2.json';
import _22P2 from '../life/oscillator/22P2.json';
import _22P36 from '../life/oscillator/22P36.json';
import _230P8 from '../life/oscillator/230P8.json';
import _23P2 from '../life/oscillator/23P2.json';
import _24P10 from '../life/oscillator/24P10.json';
import _24P2 from '../life/oscillator/24P2.json';
import _258P3_on_achims_p11 from '../life/oscillator/258P3-on-achims-p11.json';
import _258P3 from '../life/oscillator/258P3.json';
import _26P2 from '../life/oscillator/26P2.json';
import _28P7_1 from '../life/oscillator/28P7_1.json';
import _28P7_2 from '../life/oscillator/28P7_2.json';
import _28P7_3 from '../life/oscillator/28P7_3.json';
import _30P6_1 from '../life/oscillator/30P6_1.json';
import _33P3_1 from '../life/oscillator/33P3_1.json';
import _35P12_1 from '../life/oscillator/35P12_1.json';
import _37P10_1 from '../life/oscillator/37P10_1.json';
import _37P7_1 from '../life/oscillator/37P7_1.json';
import _38P7_2 from '../life/oscillator/38P7_2.json';
import _41P7_2 from '../life/oscillator/41P7_2.json';
import _44P12_3 from '../life/oscillator/44P12_3.json';
import _44P7_2 from '../life/oscillator/44P7_2.json';
import _48P22_1 from '../life/oscillator/48P22_1.json';
import _49P88 from '../life/oscillator/49P88.json';
import _50P35 from '../life/oscillator/50P35.json';
import _53P13 from '../life/oscillator/53P13.json';
import _55P10 from '../life/oscillator/55P10.json';
import _56P27 from '../life/oscillator/56P27.json';
import _5blink from '../life/oscillator/5blink.json';
import _60P312 from '../life/oscillator/60P312.json';
import _62P3_1 from '../life/oscillator/62P3_1.json';
import _65P48 from '../life/oscillator/65P48.json';
import _66P13 from '../life/oscillator/66P13.json';
import _68P16 from '../life/oscillator/68P16.json';
import _68P32_1 from '../life/oscillator/68P32_1.json';
import _68P9 from '../life/oscillator/68P9.json';
import _69P48 from '../life/oscillator/69P48.json';
import _77P77 from '../life/oscillator/77P77.json';
import _78P70 from '../life/oscillator/78P70.json';
import _80P6 from '../life/oscillator/80P6.json';
import _84P87 from '../life/oscillator/84P87.json';
import _87P26 from '../life/oscillator/87P26.json';
import _92P51 from '../life/oscillator/92P51.json';
import _94P27_1 from '../life/oscillator/94P27_1.json';
import _98P25 from '../life/oscillator/98P25.json';
import _a_for_all from '../life/oscillator/a-for-all.json';
import _achims_other_p16 from '../life/oscillator/achims-other-p16.json';
import _achims_p11 from '../life/oscillator/achims-p11.json';
import _achims_p144 from '../life/oscillator/achims-p144.json';
import _achims_p16 from '../life/oscillator/achims-p16.json';
import _achims_p4 from '../life/oscillator/achims-p4.json';
import _achims_p8 from '../life/oscillator/achims-p8.json';
import _almosymmetric from '../life/oscillator/almosymmetric.json';
import _babbling_brook_1 from '../life/oscillator/babbling-brook/babbling-brook-1.json';
import _beacon from '../life/oscillator/babbling-brook/beacon.json';
import _four_boats from '../life/oscillator/babbling-brook/four-boats.json';
import _great_on_off from '../life/oscillator/babbling-brook/great-on-off.json';
import _light_bulb from '../life/oscillator/babbling-brook/light-bulb.json';
import _bakers_dozen from '../life/oscillator/bakers-dozen.json';
import _beacon_on_38P11_1 from '../life/oscillator/beacon-on-38P11_1.json';
import _beacon_on_cover from '../life/oscillator/beacon-on-cover.json';
import _beehive_on_long_hook_eating_tub from '../life/oscillator/beehive-on-long-hook-eating-tub.json';
import _beehive_test_tube_baby from '../life/oscillator/beehive-test-tube-baby.json';
import _beluchenkos_other_p37 from '../life/oscillator/beluchenkos-other-p37.json';
import _beluchenkos_p13 from '../life/oscillator/beluchenkos-p13.json';
import _beluchenkos_p37 from '../life/oscillator/beluchenkos-p37.json';
import _beluchenkos_p40 from '../life/oscillator/beluchenkos-p40.json';
import _beluchenkos_p51 from '../life/oscillator/beluchenkos-p51.json';
import _bent_keys from '../life/oscillator/bent-keys.json';
import _$rats from '../life/oscillator/billiard-table/$rats.json';
import _1_2_3_4 from '../life/oscillator/billiard-table/1-2-3-4.json';
import _1_2_3 from '../life/oscillator/billiard-table/1-2-3.json';
import _123P27_1 from '../life/oscillator/billiard-table/123P27_1.json';
import _29P9 from '../life/oscillator/billiard-table/29P9.json';
import _38P11_1 from '../life/oscillator/billiard-table/38P11_1.json';
import _42P10_3 from '../life/oscillator/billiard-table/42P10_3.json';
import _44P14 from '../life/oscillator/billiard-table/44P14.json';
import _54P17_1 from '../life/oscillator/billiard-table/54P17_1.json';
import _a_verage from '../life/oscillator/billiard-table/a-verage.json';
import _airforce from '../life/oscillator/billiard-table/airforce.json';
import _boss from '../life/oscillator/billiard-table/boss.json';
import _burloaferimeter from '../life/oscillator/billiard-table/burloaferimeter.json';
import _cauldron from '../life/oscillator/billiard-table/cauldron.json';
import _champagne_glass from '../life/oscillator/billiard-table/champagne-glass.json';
import _chemist from '../life/oscillator/billiard-table/chemist.json';
import _clock_2 from '../life/oscillator/billiard-table/clock-2.json';
import _cousins from '../life/oscillator/billiard-table/cousins.json';
import _crowd from '../life/oscillator/billiard-table/crowd.json';
import _diamond_ring from '../life/oscillator/billiard-table/diamond-ring.json';
import _en_retard from '../life/oscillator/billiard-table/en-retard.json';
import _fore_and_back from '../life/oscillator/billiard-table/fore-and-back.json';
import _frog_II from '../life/oscillator/billiard-table/frog-II.json';
import _germ from '../life/oscillator/billiard-table/germ.json';
import _hertz_oscillator from '../life/oscillator/billiard-table/hertz-oscillator.json';
import _hustler_II from '../life/oscillator/billiard-table/hustler-II.json';
import _hustler from '../life/oscillator/billiard-table/hustler.json';
import _loading_dock from '../life/oscillator/billiard-table/loading-dock.json';
import _mathematician from '../life/oscillator/billiard-table/mathematician.json';
import _merzenichs_p18 from '../life/oscillator/billiard-table/merzenichs-p18.json';
import _mini_pressure_cooker from '../life/oscillator/billiard-table/mini-pressure-cooker.json';
import _negentropy from '../life/oscillator/billiard-table/negentropy.json';
import _new_five from '../life/oscillator/billiard-table/new-five.json';
import _pinwheel from '../life/oscillator/billiard-table/pinwheel.json';
import _pressure_cooker from '../life/oscillator/billiard-table/pressure-cooker.json';
import _protein from '../life/oscillator/billiard-table/protein.json';
import _biting_off_more_than_they_can_chew from '../life/oscillator/biting-off-more-than-they-can-chew.json';
import _blinkers_bit_pole from '../life/oscillator/blinkers-bit-pole.json';
import _blocked_p4_1 from '../life/oscillator/blocked-p4-1.json';
import _blocked_p4_2 from '../life/oscillator/blocked-p4-2.json';
import _blocked_p4_3 from '../life/oscillator/blocked-p4-3.json';
import _blocked_p4_4 from '../life/oscillator/blocked-p4-4.json';
import _blocked_p4_5 from '../life/oscillator/blocked-p4-5.json';
import _blocker from '../life/oscillator/blocker.json';
import _blonker_on_richs_p16 from '../life/oscillator/blonker-on-richs-p16.json';
import _blonker from '../life/oscillator/blonker.json';
import _boat_test_tube_baby from '../life/oscillator/boat-test-tube-baby.json';
import _boat_tie_quadpole from '../life/oscillator/boat-tie-quadpole.json';
import _boat_tie_spark_coil from '../life/oscillator/boat-tie-spark-coil.json';
import _boring_p24 from '../life/oscillator/boring-p24.json';
import _bottle from '../life/oscillator/bottle.json';
import _buckinghams_p13 from '../life/oscillator/buckinghams-p13.json';
import _candelabra from '../life/oscillator/candelabra.json';
import _candlefrobra from '../life/oscillator/candlefrobra.json';
import _caterer_on_28P7_3 from '../life/oscillator/caterer-on-28P7_3.json';
import _caterer_on_42P7_1 from '../life/oscillator/caterer-on-42P7_1.json';
import _caterer_on_44P7_2 from '../life/oscillator/caterer-on-44P7_2.json';
import _caterer_on_68P32 from '../life/oscillator/caterer-on-68P32.json';
import _caterer_on_beluchenkos_p13 from '../life/oscillator/caterer-on-beluchenkos-p13.json';
import _caterer_on_figure_eight from '../life/oscillator/caterer-on-figure-eight.json';
import _caterer_on_jasons_p22 from '../life/oscillator/caterer-on-jasons-p22.json';
import _caterer_on_merzenichs_p31 from '../life/oscillator/caterer-on-merzenichs-p31.json';
import _caterer_on_rattlesnake from '../life/oscillator/caterer-on-rattlesnake.json';
import _caterer from '../life/oscillator/caterer.json';
import _cis_beacon_down_on_long_hook from '../life/oscillator/cis-beacon-down-on-long-hook.json';
import _cis_beacon_on_anvil from '../life/oscillator/cis-beacon-on-anvil.json';
import _cis_beacon_on_cap from '../life/oscillator/cis-beacon-on-cap.json';
import _cis_beacon_on_dock from '../life/oscillator/cis-beacon-on-dock.json';
import _cis_beacon_on_table from '../life/oscillator/cis-beacon-on-table.json';
import _cis_beacon_up_on_long_hook from '../life/oscillator/cis-beacon-up-on-long-hook.json';
import _cis_boat_on_long_hook_eating_tub from '../life/oscillator/cis-boat-on-long-hook-eating-tub.json';
import _claw_test_tube_baby from '../life/oscillator/claw-test-tube-baby.json';
import _coes_p8 from '../life/oscillator/coes-p8.json';
import _confused_eaters from '../life/oscillator/confused-eaters.json';
import _cross_2 from '../life/oscillator/cross-2.json';
import _cross from '../life/oscillator/cross.json';
import _crown from '../life/oscillator/crown.json';
import _david_hilbert from '../life/oscillator/david-hilbert.json';
import _dinner_table from '../life/oscillator/dinner-table.json';
import _double_caterer from '../life/oscillator/double-caterer.json';
import _double_ewe from '../life/oscillator/double-ewe.json';
import _dueling_banjos from '../life/oscillator/dueling-banjos.json';
import _eater_block_frob from '../life/oscillator/eater-block-frob.json';
import _eater_plug from '../life/oscillator/eater-plug.json';
import _electric_fence from '../life/oscillator/electric-fence.json';
import _elkies_p5 from '../life/oscillator/elkies-p5.json';
import _ellison_p4_HW_emulator_hybrid from '../life/oscillator/ellison-p4-HW-emulator-hybrid.json';
import _ellison_p4_HW_emulator from '../life/oscillator/ellison-p4-HW-emulator.json';
import _extremely_impressive from '../life/oscillator/extremely-impressive.json';
import _figure_eight_on_22P36 from '../life/oscillator/figure-eight-on-22P36.json';
import _figure_eight_on_beluchenkos_p13 from '../life/oscillator/figure-eight-on-beluchenkos-p13.json';
import _figure_eight_on_jasons_p22 from '../life/oscillator/figure-eight-on-jasons-p22.json';
import _figure_eight_on_pentadecathlon from '../life/oscillator/figure-eight-on-pentadecathlon.json';
import _figure_eight_on_rattlesnake from '../life/oscillator/figure-eight-on-rattlesnake.json';
import _figure_eight from '../life/oscillator/figure-eight.json';
import _fire_spitting from '../life/oscillator/fire-spitting.json';
import _fountain from '../life/oscillator/fountain.json';
import _four_eaters_hassling_four_bookends from '../life/oscillator/four-eaters-hassling-four-bookends.json';
import _four_eaters_hassling_lumps_of_muck from '../life/oscillator/four-eaters-hassling-lumps-of-muck.json';
import _four_molds_hassling_eight_blocks from '../life/oscillator/four-molds-hassling-eight-blocks.json';
import _fox from '../life/oscillator/fox.json';
import _french_kiss from '../life/oscillator/french-kiss.json';
import _fumarole_on_34P14_shuttle from '../life/oscillator/fumarole-on-34P14-shuttle.json';
import _fumarole_on_achims_p11 from '../life/oscillator/fumarole-on-achims-p11.json';
import _fumarole_on_beluchenkos_p13 from '../life/oscillator/fumarole-on-beluchenkos-p13.json';
import _fumarole_on_p18_bi_block_hassler from '../life/oscillator/fumarole-on-p18-bi-block-hassler.json';
import _fumarole_on_richs_p16 from '../life/oscillator/fumarole-on-richs-p16.json';
import _fumarole_on_robs_p16 from '../life/oscillator/fumarole-on-robs-p16.json';
import _fumarole from '../life/oscillator/fumarole.json';
import _gabriels_p138 from '../life/oscillator/gabriels-p138.json';
import _glasses from '../life/oscillator/glasses.json';
import _beehive_on_griddle from '../life/oscillator/griddle/beehive-on-griddle.json';
import _block_on_griddle from '../life/oscillator/griddle/block-on-griddle.json';
import _blocks_on_griddle from '../life/oscillator/griddle/blocks-on-griddle.json';
import _boat_on_griddle from '../life/oscillator/griddle/boat-on-griddle.json';
import _by_flops from '../life/oscillator/griddle/by-flops.json';
import _griddle_and_dock from '../life/oscillator/griddle/griddle-and-dock.json';
import _griddle_and_table from '../life/oscillator/griddle/griddle-and-table.json';
import _harbor from '../life/oscillator/harbor.json';
import _heart from '../life/oscillator/heart.json';
import _heavyweight_emulator from '../life/oscillator/heavyweight-emulator.json';
import _heavyweight_volcano from '../life/oscillator/heavyweight-volcano.json';
import _hebdarole from '../life/oscillator/hebdarole.json';
import _hive_test_tube_baby from '../life/oscillator/hive-test-tube-baby.json';
import _honey_thieves_with_test_tube_baby from '../life/oscillator/honey-thieves-with-test-tube-baby.json';
import _honey_thieves from '../life/oscillator/honey-thieves.json';
import _hook_test_tube_baby from '../life/oscillator/hook-test-tube-baby.json';
import _hooks from '../life/oscillator/hooks.json';
import _jack from '../life/oscillator/jack.json';
import _jam from '../life/oscillator/jam.json';
import _jasons_p11 from '../life/oscillator/jasons-p11.json';
import _jasons_p156 from '../life/oscillator/jasons-p156.json';
import _jasons_p22 from '../life/oscillator/jasons-p22.json';
import _jasons_p33 from '../life/oscillator/jasons-p33.json';
import _jasons_p36 from '../life/oscillator/jasons-p36.json';
import _jasons_p6 from '../life/oscillator/jasons-p6.json';
import _jolson from '../life/oscillator/jolson.json';
import _karels_p15 from '../life/oscillator/karels-p15.json';
import _karels_p177 from '../life/oscillator/karels-p177.json';
import _karels_p28 from '../life/oscillator/karels-p28.json';
import _koks_galaxy from '../life/oscillator/koks-galaxy.json';
import _laputa from '../life/oscillator/laputa.json';
import _lei from '../life/oscillator/lei.json';
import _light_speed_oscillator_1 from '../life/oscillator/light-speed-oscillator-1.json';
import _light_speed_oscillator_2 from '../life/oscillator/light-speed-oscillator-2.json';
import _light_speed_oscillator_3 from '../life/oscillator/light-speed-oscillator-3.json';
import _lightweight_emulator from '../life/oscillator/lightweight-emulator.json';
import _loaf_test_tube_baby from '../life/oscillator/loaf-test-tube-baby.json';
import _loaflipflop from '../life/oscillator/loaflipflop.json';
import _mangled_1_beacon from '../life/oscillator/mangled-1-beacon.json';
import _mango_test_tube_baby from '../life/oscillator/mango-test-tube-baby.json';
import _mazing from '../life/oscillator/mazing.json';
import _merzenichs_p11 from '../life/oscillator/merzenichs-p11.json';
import _merzenichs_p31 from '../life/oscillator/merzenichs-p31.json';
import _merzenichs_p64 from '../life/oscillator/merzenichs-p64.json';
import _middleweight_emulator from '../life/oscillator/middleweight-emulator.json';
import _middleweight_volcano from '../life/oscillator/middleweight-volcano.json';
import _mold_on_34P14_shuttle from '../life/oscillator/mold-on-34P14-shuttle.json';
import _mold_on_41P7_2 from '../life/oscillator/mold-on-41P7_2.json';
import _mold_on_fumarole from '../life/oscillator/mold-on-fumarole.json';
import _mold_on_jasons_p22 from '../life/oscillator/mold-on-jasons-p22.json';
import _mold_on_long_hook_eating_tub from '../life/oscillator/mold-on-long-hook-eating-tub.json';
import _mold_on_merzenichs_p31 from '../life/oscillator/mold-on-merzenichs-p31.json';
import _mold_on_pentadecathlon from '../life/oscillator/mold-on-pentadecathlon.json';
import _mold_on_rattlesnake from '../life/oscillator/mold-on-rattlesnake.json';
import _mold from '../life/oscillator/mold.json';
import _monoclaw_test_tube_baby from '../life/oscillator/monoclaw-test-tube-baby.json';
import _monogram from '../life/oscillator/monogram.json';
import _montana from '../life/oscillator/montana.json';
import _14P2_1 from '../life/oscillator/muttering-moat/14P2_1.json';
import _bipole_tie_pseudo_barberpole from '../life/oscillator/muttering-moat/bipole-tie-pseudo-barberpole.json';
import _bipole_tie_ship from '../life/oscillator/muttering-moat/bipole-tie-ship.json';
import _bipole_tie_snake from '../life/oscillator/muttering-moat/bipole-tie-snake.json';
import _bipole from '../life/oscillator/muttering-moat/bipole.json';
import _blinker from '../life/oscillator/muttering-moat/blinker.json';
import _boat_tie_bipole from '../life/oscillator/muttering-moat/boat-tie-bipole.json';
import _boat_tie_tripole from '../life/oscillator/muttering-moat/boat-tie-tripole.json';
import _carrier_tie_bipole from '../life/oscillator/muttering-moat/carrier-tie-bipole.json';
import _cha_cha from '../life/oscillator/muttering-moat/cha-cha.json';
import _circle_of_fire from '../life/oscillator/muttering-moat/circle-of-fire.json';
import _clock from '../life/oscillator/muttering-moat/clock.json';
import _cuphook from '../life/oscillator/muttering-moat/cuphook.json';
import _cyclic from '../life/oscillator/muttering-moat/cyclic.json';
import _decapole from '../life/oscillator/muttering-moat/decapole.json';
import _duodecapole from '../life/oscillator/muttering-moat/duodecapole.json';
import _gray_counter from '../life/oscillator/muttering-moat/gray-counter.json';
import _heptapole from '../life/oscillator/muttering-moat/heptapole.json';
import _hexapole from '../life/oscillator/muttering-moat/hexapole.json';
import _muttering_moat_1 from '../life/oscillator/muttering-moat/muttering-moat-1.json';
import _nonapole from '../life/oscillator/muttering-moat/nonapole.json';
import _octapole from '../life/oscillator/muttering-moat/octapole.json';
import _pentapole from '../life/oscillator/muttering-moat/pentapole.json';
import _octagon_2 from '../life/oscillator/octagon-2.json';
import _octagon_4 from '../life/oscillator/octagon-4.json';
import _odd_keys from '../life/oscillator/odd-keys.json';
import _odd_test_tube_baby from '../life/oscillator/odd-test-tube-baby.json';
import _overweight_emulator from '../life/oscillator/overweight-emulator.json';
import _p10_traffic_light_hassler from '../life/oscillator/p10-traffic-light-hassler.json';
import _p11_double_length_signal_injector from '../life/oscillator/p11-double-length-signal-injector.json';
import _p11_pinwheel from '../life/oscillator/p11-pinwheel.json';
import _p110_traffic_jam from '../life/oscillator/p110-traffic-jam.json';
import _p124_lumps_of_muck_hassler from '../life/oscillator/p124-lumps-of-muck-hassler.json';
import _p156_hans_leo_hassler from '../life/oscillator/p156-hans-leo-hassler.json';
import _p18_bi_block_hassler from '../life/oscillator/p18-bi-block-hassler.json';
import _p18_honey_farm_hassler from '../life/oscillator/p18-honey-farm-hassler.json';
import _p200_traffic_jam from '../life/oscillator/p200-traffic-jam.json';
import _p22_lumps_of_muck_hassler from '../life/oscillator/p22-lumps-of-muck-hassler.json';
import _p29_pentadecathlon_hassler from '../life/oscillator/p29-pentadecathlon-hassler.json';
import _p29_traffic_farm_hassler from '../life/oscillator/p29-traffic-farm-hassler.json';
import _p32_blinker_hassler_2 from '../life/oscillator/p32-blinker-hassler-2.json';
import _p32_blinker_hassler from '../life/oscillator/p32-blinker-hassler.json';
import _p35_beehive_hassler from '../life/oscillator/p35-beehive-hassler.json';
import _p35_honey_farm_hassler from '../life/oscillator/p35-honey-farm-hassler.json';
import _p36_toad_hassler from '../life/oscillator/p36-toad-hassler.json';
import _p44_pi_heptomino_hassler from '../life/oscillator/p44-pi-heptomino-hassler.json';
import _p44_traffic_light_hassler from '../life/oscillator/p44-traffic-light-hassler.json';
import _p46_based_prng from '../life/oscillator/p46-based-prng.json';
import _p48_pi_hassler from '../life/oscillator/p48-pi-hassler.json';
import _p48_toad_hassler from '../life/oscillator/p48-toad-hassler.json';
import _p49_skewed_pulsar_hassler from '../life/oscillator/p49-skewed-pulsar-hassler.json';
import _p5_pipsquirter from '../life/oscillator/p5-pipsquirter.json';
import _p50_traffic_jam from '../life/oscillator/p50-traffic-jam.json';
import _p55_pre_pulsar_hassler from '../life/oscillator/p55-pre-pulsar-hassler.json';
import _p57_herschel_loop_1 from '../life/oscillator/p57-herschel-loop-1.json';
import _p58_toadsucker from '../life/oscillator/p58-toadsucker.json';
import _p59_herschel_loop_1 from '../life/oscillator/p59-herschel-loop-1.json';
import _p59_herschel_loop_2 from '../life/oscillator/p59-herschel-loop-2.json';
import _p6_shuttle from '../life/oscillator/p6-shuttle.json';
import _p6_thumb from '../life/oscillator/p6-thumb.json';
import _p60_b_heptomino_hassler from '../life/oscillator/p60-b-heptomino-hassler.json';
import _p60_traffic_light_hassler from '../life/oscillator/p60-traffic-light-hassler.json';
import _p61_herschel_loop_1 from '../life/oscillator/p61-herschel-loop-1.json';
import _p61_herschel_loop_2 from '../life/oscillator/p61-herschel-loop-2.json';
import _p64_thunderbird_hassler from '../life/oscillator/p64-thunderbird-hassler.json';
import _p72_quasi_shuttle from '../life/oscillator/p72-quasi-shuttle.json';
import _pedestle from '../life/oscillator/pedestle.json';
import _penny_lane from '../life/oscillator/penny-lane.json';
import _pentadecathlon_on_37p7_1 from '../life/oscillator/pentadecathlon-on-37p7_1.json';
import _pentadecathlon_on_snacker from '../life/oscillator/pentadecathlon-on-snacker.json';
import _pentadecathlon_on_thumb_1 from '../life/oscillator/pentadecathlon-on-thumb-1.json';
import _pentadecathlon from '../life/oscillator/pentadecathlon.json';
import _pentant from '../life/oscillator/pentant.json';
import _pentoad_1h2 from '../life/oscillator/pentoad-1h2.json';
import _pentoad_2 from '../life/oscillator/pentoad-2.json';
import _pentoad from '../life/oscillator/pentoad.json';
import _phoenix_1 from '../life/oscillator/phoenix/phoenix-1.json';
import _pi_orbital from '../life/oscillator/pi-orbital.json';
import _pi_portraitor from '../life/oscillator/pi-portraitor.json';
import _pipsquirter_1 from '../life/oscillator/pipsquirter-1.json';
import _pipsquirter_2 from '../life/oscillator/pipsquirter-2.json';
import _piston from '../life/oscillator/piston.json';
import _popover from '../life/oscillator/popover.json';
import _pseudo_barberpole_on_jasons_p22 from '../life/oscillator/pseudo-barberpole-on-jasons-p22.json';
import _pseudo_barberpole_on_rattlesnake from '../life/oscillator/pseudo-barberpole-on-rattlesnake.json';
import _pseudo_barberpole from '../life/oscillator/pseudo-barberpole.json';
import _pulsar_quadrant from '../life/oscillator/pulsar-quadrant.json';
import _pulsar from '../life/oscillator/pulsar.json';
import _106P135 from '../life/oscillator/relay/106P135.json';
import _6_bits from '../life/oscillator/relay/6-bits.json';
import _double_x from '../life/oscillator/relay/double-x.json';
import _hectic from '../life/oscillator/relay/hectic.json';
import _metamorphosis_II from '../life/oscillator/relay/metamorphosis-II.json';
import _p26_glider_shuttle from '../life/oscillator/relay/p26-glider-shuttle.json';
import _p42_glider_shuttle from '../life/oscillator/relay/p42-glider-shuttle.json';
import _p43_snark_loop from '../life/oscillator/relay/p43-snark-loop.json';
import _p49_bumper_loop from '../life/oscillator/relay/p49-bumper-loop.json';
import _p49_glider_shuttle from '../life/oscillator/relay/p49-glider-shuttle.json';
import _p50_glider_shuttle from '../life/oscillator/relay/p50-glider-shuttle.json';
import _p57_bumper_loop from '../life/oscillator/relay/p57-bumper-loop.json';
import _p60_glider_shuttle from '../life/oscillator/relay/p60-glider-shuttle.json';
import _34P14_shuttle from '../life/oscillator/shuttle/34P14-shuttle.json';
import _carnival_shuttle from '../life/oscillator/shuttle/carnival-shuttle.json';
import _centinal from '../life/oscillator/shuttle/centinal.json';
import _diuresis from '../life/oscillator/shuttle/diuresis.json';
import _eureka from '../life/oscillator/shuttle/eureka.json';
import _gourmet from '../life/oscillator/shuttle/gourmet.json';
import _newshuttle from '../life/oscillator/shuttle/newshuttle.json';
import _p130_shuttle from '../life/oscillator/shuttle/p130-shuttle.json';
import _p24_shuttle from '../life/oscillator/shuttle/p24-shuttle.json';
import _p26_pre_pulsar_shuttle from '../life/oscillator/shuttle/p26-pre-pulsar-shuttle.json';
import _p28_pre_pulsar_shuttle from '../life/oscillator/shuttle/p28-pre-pulsar-shuttle.json';
import _p29_pre_pulsar_shuttle from '../life/oscillator/shuttle/p29-pre-pulsar-shuttle.json';
import _p36_shuttle from '../life/oscillator/shuttle/p36-shuttle.json';
import _p40_b_heptomino_shuttle from '../life/oscillator/shuttle/p40-b-heptomino-shuttle.json';
import _p47_pre_pulsar_shuttle from '../life/oscillator/shuttle/p47-pre-pulsar-shuttle.json';
import _p54_shuttle from '../life/oscillator/shuttle/p54-shuttle.json';
import _p56_b_heptomino_shuttle from '../life/oscillator/shuttle/p56-b-heptomino-shuttle.json';
import _p58_pre_pulsar_shuttle from '../life/oscillator/shuttle/p58-pre-pulsar-shuttle.json';
import _blocked_p4_t_nose_hybrid from '../life/oscillator/t-nose/blocked-p4-t-nose-hybrid.json';
import _blocked_p4_t_nose from '../life/oscillator/t-nose/blocked-p4-t-nose.json';
import _toad from '../life/oscillator/toad.json';
import _7x9_eater from '../life/still-life/eater/7x9-eater.json';
import _century_eater from '../life/still-life/eater/century-eater.json';
import _eater_1 from '../life/still-life/eater/eater-1.json';
import _eater_2 from '../life/still-life/eater/eater-2.json';
import _eater_3 from '../life/still-life/eater/eater-3.json';
import _eater_4 from '../life/still-life/eater/eater-4.json';
import _sidesnagger from '../life/still-life/eater/sidesnagger.json';
import _tub_with_tail_eater from '../life/still-life/eater/tub-with-tail-eater.json';
import _bi_block from '../life/still-life/pseudo-still-life/bi-block.json';
import _bi_boat from '../life/still-life/pseudo-still-life/bi-boat.json';
import _block_on_boat from '../life/still-life/pseudo-still-life/block-on-boat.json';
import _pond_on_pond from '../life/still-life/pseudo-still-life/pond-on-pond.json';
import _quad_pseudo_still_life from '../life/still-life/pseudo-still-life/quad-pseudo-still-life.json';
import _triple_pseudo_still_life from '../life/still-life/pseudo-still-life/triple-pseudo-still-life.json';
import _15_bent_paperclip from '../life/still-life/strict-still-life/15-bent-paperclip.json';
import _29_bit_still_life_no1 from '../life/still-life/strict-still-life/29-bit-still-life-no1.json';
import _31_4 from '../life/still-life/strict-still-life/31_4.json';
import _R_bee_and_snake from '../life/still-life/strict-still-life/R-bee-and-snake.json';
import _R_bee_on_beehive from '../life/still-life/strict-still-life/R-bee-on-beehive.json';
import _R_bee_with_feather from '../life/still-life/strict-still-life/R-bee-with-feather.json';
import _R_mango_and_house from '../life/still-life/strict-still-life/R-mango-and-house.json';
import _aircraft_carrier from '../life/still-life/strict-still-life/aircraft-carrier.json';
import _amphisbaena from '../life/still-life/strict-still-life/amphisbaena.json';
import _aries_betwixt_two_blocks from '../life/still-life/strict-still-life/aries-betwixt-two-blocks.json';
import _asymmetric_amphisbaena from '../life/still-life/strict-still-life/asymmetric-amphisbaena.json';
import _barge_siamese_loaf from '../life/still-life/strict-still-life/barge-siamese-loaf.json';
import _barge_with_long_tail from '../life/still-life/strict-still-life/barge-with-long-tail.json';
import _barge_with_very_long_tail from '../life/still-life/strict-still-life/barge-with-very-long-tail.json';
import _barge from '../life/still-life/strict-still-life/barge.json';
import _bee_hat from '../life/still-life/strict-still-life/bee-hat.json';
import _beehive_at_beehive from '../life/still-life/strict-still-life/beehive-at-beehive.json';
import _beehive_at_claw from '../life/still-life/strict-still-life/beehive-at-claw.json';
import _beehive_at_loaf from '../life/still-life/strict-still-life/beehive-at-loaf.json';
import _beehive_on_cap from '../life/still-life/strict-still-life/beehive-on-cap.json';
import _beehive_on_dock from '../life/still-life/strict-still-life/beehive-on-dock.json';
import _beehive_on_table from '../life/still-life/strict-still-life/beehive-on-table.json';
import _beehive_with_bend_tail from '../life/still-life/strict-still-life/beehive-with-bend-tail.json';
import _beehive_with_nine from '../life/still-life/strict-still-life/beehive-with-nine.json';
import _beehive_with_tail from '../life/still-life/strict-still-life/beehive-with-tail.json';
import _beehive from '../life/still-life/strict-still-life/beehive.json';
import _bi_cap from '../life/still-life/strict-still-life/bi-cap.json';
import _bi_loaf2 from '../life/still-life/strict-still-life/bi-loaf2.json';
import _bi_pond from '../life/still-life/strict-still-life/bi-pond.json';
import _big_s from '../life/still-life/strict-still-life/big-s.json';
import _block_on_cap from '../life/still-life/strict-still-life/block-on-cap.json';
import _block_on_cover from '../life/still-life/strict-still-life/block-on-cover.json';
import _block_on_dock from '../life/still-life/strict-still-life/block-on-dock.json';
import _block_on_table from '../life/still-life/strict-still-life/block-on-table.json';
import _block from '../life/still-life/strict-still-life/block.json';
import _boat_tie_eater_head from '../life/still-life/strict-still-life/boat-tie-eater-head.json';
import _boat_tie_eater_tail from '../life/still-life/strict-still-life/boat-tie-eater-tail.json';
import _boat_tie_long_boat from '../life/still-life/strict-still-life/boat-tie-long-boat.json';
import _boat_tie_long_snake from '../life/still-life/strict-still-life/boat-tie-long-snake.json';
import _boat_tie_ship from '../life/still-life/strict-still-life/boat-tie-ship.json';
import _boat_tie_snake from '../life/still-life/strict-still-life/boat-tie-snake.json';
import _boat_tie from '../life/still-life/strict-still-life/boat-tie.json';
import _boat_with_cis_tail from '../life/still-life/strict-still-life/boat-with-cis-tail.json';
import _boat_with_hooked_tail from '../life/still-life/strict-still-life/boat-with-hooked-tail.json';
import _boat_with_long_tail from '../life/still-life/strict-still-life/boat-with-long-tail.json';
import _boat_with_long3_tail from '../life/still-life/strict-still-life/boat-with-long3-tail.json';
import _boat_with_very_long_tail from '../life/still-life/strict-still-life/boat-with-very-long-tail.json';
import _boat from '../life/still-life/strict-still-life/boat.json';
import _bookend_table_snake from '../life/still-life/strict-still-life/bookend-table-snake.json';
import _bookends_siamese_tables from '../life/still-life/strict-still-life/bookends-siamese-tables.json';
import _bookends from '../life/still-life/strict-still-life/bookends.json';
import _broken_elevener from '../life/still-life/strict-still-life/broken-elevener.json';
import _broken_snake from '../life/still-life/strict-still-life/broken-snake.json';
import _canoe_siamese_snake from '../life/still-life/strict-still-life/canoe-siamese-snake.json';
import _canoe from '../life/still-life/strict-still-life/canoe.json';
import _cap_and_dock from '../life/still-life/strict-still-life/cap-and-dock.json';
import _carrier_bridge_carrier from '../life/still-life/strict-still-life/carrier-bridge-carrier.json';
import _carrier_bridge_snake from '../life/still-life/strict-still-life/carrier-bridge-snake.json';
import _carrier_bridge_table from '../life/still-life/strict-still-life/carrier-bridge-table.json';
import _carrier_siamese_canoe from '../life/still-life/strict-still-life/carrier-siamese-canoe.json';
import _carrier_siamese_carrier from '../life/still-life/strict-still-life/carrier-siamese-carrier.json';
import _carrier_siamese_dock from '../life/still-life/strict-still-life/carrier-siamese-dock.json';
import _carrier_siamese_eater_head from '../life/still-life/strict-still-life/carrier-siamese-eater-head.json';
import _carrier_siamese_eater_tail from '../life/still-life/strict-still-life/carrier-siamese-eater-tail.json';
import _carrier_siamese_hook_with_tail_hook from '../life/still-life/strict-still-life/carrier-siamese-hook-with-tail-hook.json';
import _carrier_siamese_hook_with_tail_tail from '../life/still-life/strict-still-life/carrier-siamese-hook-with-tail-tail.json';
import _carrier_siamese_long_snake from '../life/still-life/strict-still-life/carrier-siamese-long-snake.json';
import _carrier_siamese_shillelagh from '../life/still-life/strict-still-life/carrier-siamese-shillelagh.json';
import _carrier_siamese_tub_with_tail from '../life/still-life/strict-still-life/carrier-siamese-tub-with-tail.json';
import _carrier_siamese_very_long_snake from '../life/still-life/strict-still-life/carrier-siamese-very-long-snake.json';
import _carrier_tie_boat from '../life/still-life/strict-still-life/carrier-tie-boat.json';
import _carrier_tie_ship from '../life/still-life/strict-still-life/carrier-tie-ship.json';
import _carrier_with_feather from '../life/still-life/strict-still-life/carrier-with-feather.json';
import _cis_R_bee_and_R_loaf from '../life/still-life/strict-still-life/cis-R-bee-and-R-loaf.json';
import _cis_barge_with_nine from '../life/still-life/strict-still-life/cis-barge-with-nine.json';
import _cis_barge_with_tail from '../life/still-life/strict-still-life/cis-barge-with-tail.json';
import _cis_block_on_long_hook from '../life/still-life/strict-still-life/cis-block-on-long-hook.json';
import _cis_boat_amphisbaena from '../life/still-life/strict-still-life/cis-boat-amphisbaena.json';
import _cis_boat_and_cap from '../life/still-life/strict-still-life/cis-boat-and-cap.json';
import _cis_boat_line_tub from '../life/still-life/strict-still-life/cis-boat-line-tub.json';
import _cis_boat_on_dock from '../life/still-life/strict-still-life/cis-boat-on-dock.json';
import _cis_boat_on_table from '../life/still-life/strict-still-life/cis-boat-on-table.json';
import _cis_boat_with_nine from '../life/still-life/strict-still-life/cis-boat-with-nine.json';
import _cis_boat_with_tail from '../life/still-life/strict-still-life/cis-boat-with-tail.json';
import _cis_carrier_down_on_table from '../life/still-life/strict-still-life/cis-carrier-down-on-table.json';
import _cis_carrier_tie_snake from '../life/still-life/strict-still-life/cis-carrier-tie-snake.json';
import _cis_carrier_tie from '../life/still-life/strict-still-life/cis-carrier-tie.json';
import _cis_carrier_up_on_table from '../life/still-life/strict-still-life/cis-carrier-up-on-table.json';
import _cis_fuse_with_two_tails from '../life/still-life/strict-still-life/cis-fuse-with-two-tails.json';
import _cis_hook_and_R_bee from '../life/still-life/strict-still-life/cis-hook-and-R-bee.json';
import _cis_hook_with_tail from '../life/still-life/strict-still-life/cis-hook-with-tail.json';
import _cis_loaf_with_tail from '../life/still-life/strict-still-life/cis-loaf-with-tail.json';
import _cis_long_barge_with_tail from '../life/still-life/strict-still-life/cis-long-barge-with-tail.json';
import _cis_long_boat_with_tail from '../life/still-life/strict-still-life/cis-long-boat-with-tail.json';
import _cis_mango_with_tail from '../life/still-life/strict-still-life/cis-mango-with-tail.json';
import _cis_mirrored_R_bee from '../life/still-life/strict-still-life/cis-mirrored-R-bee.json';
import _cis_mirrored_worm_siamese_cis_mirrored_worm from '../life/still-life/strict-still-life/cis-mirrored-worm-siamese-cis-mirrored-worm.json';
import _cis_mirrored_worm from '../life/still-life/strict-still-life/cis-mirrored-worm.json';
import _cis_rotated_R_bee from '../life/still-life/strict-still-life/cis-rotated-R-bee.json';
import _cis_rotated_hook from '../life/still-life/strict-still-life/cis-rotated-hook.json';
import _cis_shillelagh from '../life/still-life/strict-still-life/cis-shillelagh.json';
import _cis_ship_on_table from '../life/still-life/strict-still-life/cis-ship-on-table.json';
import _cis_snake_tie from '../life/still-life/strict-still-life/cis-snake-tie.json';
import _claw_siamese_tub_with_cape from '../life/still-life/strict-still-life/claw-siamese-tub-with-cape.json';
import _claw_with_boat_with_tail from '../life/still-life/strict-still-life/claw-with-boat-with-tail.json';
import _claw_with_tail from '../life/still-life/strict-still-life/claw-with-tail.json';
import _claw_with_tub_with_tail from '../life/still-life/strict-still-life/claw-with-tub-with-tail.json';
import _clips from '../life/still-life/strict-still-life/clips.json';
import _cloverleaf_interchange from '../life/still-life/strict-still-life/cloverleaf-interchange.json';
import _cthulhu from '../life/still-life/strict-still-life/cthulhu.json';
import _dead_spark_coil from '../life/still-life/strict-still-life/dead-spark-coil.json';
import _dock_and_long_hook from '../life/still-life/strict-still-life/dock-and-long-hook.json';
import _double_claw from '../life/still-life/strict-still-life/double-claw.json';
import _down_snake_on_table from '../life/still-life/strict-still-life/down-snake-on-table.json';
import _eater_bridge_eater from '../life/still-life/strict-still-life/eater-bridge-eater.json';
import _eater_head_siamese_eater_head from '../life/still-life/strict-still-life/eater-head-siamese-eater-head.json';
import _eater_head_siamese_eater_tail from '../life/still-life/strict-still-life/eater-head-siamese-eater-tail.json';
import _eater_head_siamese_long_snake from '../life/still-life/strict-still-life/eater-head-siamese-long-snake.json';
import _eater_head_siamese_snake from '../life/still-life/strict-still-life/eater-head-siamese-snake.json';
import _eater_tail_siamese_eater_tail from '../life/still-life/strict-still-life/eater-tail-siamese-eater-tail.json';
import _eater_tail_siamese_long_snake from '../life/still-life/strict-still-life/eater-tail-siamese-long-snake.json';
import _eater_tail_siamese_snake from '../life/still-life/strict-still-life/eater-tail-siamese-snake.json';
import _eater_with_cape from '../life/still-life/strict-still-life/eater-with-cape.json';
import _eater_with_head_feather from '../life/still-life/strict-still-life/eater-with-head-feather.json';
import _eater_with_tail_feather from '../life/still-life/strict-still-life/eater-with-tail-feather.json';
import _egyptian_walk from '../life/still-life/strict-still-life/egyptian-walk.json';
import _eleven_loop from '../life/still-life/strict-still-life/eleven-loop.json';
import _elevener from '../life/still-life/strict-still-life/elevener.json';
import _fourteener from '../life/still-life/strict-still-life/fourteener.json';
import _fuse_with_tail_and_integral from '../life/still-life/strict-still-life/fuse-with-tail-and-integral.json';
import _fuse_with_tail_and_long_tail from '../life/still-life/strict-still-life/fuse-with-tail-and-long-tail.json';
import _fuse_with_tail_and_very_long_tail from '../life/still-life/strict-still-life/fuse-with-tail-and-very-long-tail.json';
import _fuse_with_two_long_tails from '../life/still-life/strict-still-life/fuse-with-two-long-tails.json';
import _grin_reagent from '../life/still-life/strict-still-life/grin-reagent.json';
import _gull_with_tub from '../life/still-life/strict-still-life/gull-with-tub.json';
import _half_bakery from '../life/still-life/strict-still-life/half-bakery.json';
import _hat_siamese_vase from '../life/still-life/strict-still-life/hat-siamese-vase.json';
import _hat from '../life/still-life/strict-still-life/hat.json';
import _hexagonal_key from '../life/still-life/strict-still-life/hexagonal-key.json';
import _honeybarge from '../life/still-life/strict-still-life/honeybarge.json';
import _honeycomb from '../life/still-life/strict-still-life/honeycomb.json';
import _hook_with_nine from '../life/still-life/strict-still-life/hook-with-nine.json';
import _hook_with_tail_hook_siamese_snake from '../life/still-life/strict-still-life/hook-with-tail-hook-siamese-snake.json';
import _hook_with_tail_tail_siamese_snake from '../life/still-life/strict-still-life/hook-with-tail-tail-siamese-snake.json';
import _hook_with_tail_with_cape from '../life/still-life/strict-still-life/hook-with-tail-with-cape.json';
import _hook_with_tail from '../life/still-life/strict-still-life/hook-with-tail.json';
import _hook_with_two_tails from '../life/still-life/strict-still-life/hook-with-two-tails.json';
import _house_on_house_siamese_table_on_table_weld_hat_siamese_hat from '../life/still-life/strict-still-life/house-on-house-siamese-table-on-table-weld-hat-siamese-hat.json';
import _hungry_hat from '../life/still-life/strict-still-life/hungry-hat.json';
import _inflected_clips from '../life/still-life/strict-still-life/inflected-clips.json';
import _inflected_long_snake from '../life/still-life/strict-still-life/inflected-long-snake.json';
import _inflexion from '../life/still-life/strict-still-life/inflexion.json';
import _integral_sign from '../life/still-life/strict-still-life/integral-sign.json';
import _integral_with_cis_hook from '../life/still-life/strict-still-life/integral-with-cis-hook.json';
import _integral_with_hook_and_tail from '../life/still-life/strict-still-life/integral-with-hook-and-tail.json';
import _integral_with_hook from '../life/still-life/strict-still-life/integral-with-hook.json';
import _integral_with_long_hook_and_tub from '../life/still-life/strict-still-life/integral-with-long-hook-and-tub.json';
import _integral_with_long_hook from '../life/still-life/strict-still-life/integral-with-long-hook.json';
import _integral_with_tub_and_hook from '../life/still-life/strict-still-life/integral-with-tub-and-hook.json';
import _integral_with_tub_and_tail from '../life/still-life/strict-still-life/integral-with-tub-and-tail.json';
import _integral_with_tub from '../life/still-life/strict-still-life/integral-with-tub.json';
import _integral_with_two_tubs from '../life/still-life/strict-still-life/integral-with-two-tubs.json';
import _integral_with_very_long_hook from '../life/still-life/strict-still-life/integral-with-very-long-hook.json';
import _inverted_double_claw from '../life/still-life/strict-still-life/inverted-double-claw.json';
import _lake2 from '../life/still-life/strict-still-life/lake2.json';
import _loaf_back_tie_loaf from '../life/still-life/strict-still-life/loaf-back-tie-loaf.json';
import _loaf_siamese_loaf from '../life/still-life/strict-still-life/loaf-siamese-loaf.json';
import _loaf_tie_eater_with_tail from '../life/still-life/strict-still-life/loaf-tie-eater-with-tail.json';
import _loaf from '../life/still-life/strict-still-life/loaf.json';
import _long_barge from '../life/still-life/strict-still-life/long-barge.json';
import _long_boat_tie_ship from '../life/still-life/strict-still-life/long-boat-tie-ship.json';
import _long_boat_with_long_tail from '../life/still-life/strict-still-life/long-boat-with-long-tail.json';
import _long_boat from '../life/still-life/strict-still-life/long-boat.json';
import _long_canoe from '../life/still-life/strict-still-life/long-canoe.json';
import _long_cis_hook_with_tail from '../life/still-life/strict-still-life/long-cis-hook-with-tail.json';
import _long_cis_shillelagh from '../life/still-life/strict-still-life/long-cis-shillelagh.json';
import _long_claw_with_tail from '../life/still-life/strict-still-life/long-claw-with-tail.json';
import _long_hook_with_tail from '../life/still-life/strict-still-life/long-hook-with-tail.json';
import _long_integral_with_boat from '../life/still-life/strict-still-life/long-integral-with-boat.json';
import _long_integral from '../life/still-life/strict-still-life/long-integral.json';
import _long_melusine from '../life/still-life/strict-still-life/long-melusine.json';
import _long_prodigal from '../life/still-life/strict-still-life/long-prodigal.json';
import _long_shillelagh from '../life/still-life/strict-still-life/long-shillelagh.json';
import _long_ship from '../life/still-life/strict-still-life/long-ship.json';
import _long_snake_siamese_long_snake from '../life/still-life/strict-still-life/long-snake-siamese-long-snake.json';
import _long_snake from '../life/still-life/strict-still-life/long-snake.json';
import _long_tub_claw_with_tail from '../life/still-life/strict-still-life/long-tub-claw-with-tail.json';
import _long10_boat from '../life/still-life/strict-still-life/long10-boat.json';
import _long10_ship from '../life/still-life/strict-still-life/long10-ship.json';
import _long3_barge from '../life/still-life/strict-still-life/long3-barge.json';
import _long3_boat from '../life/still-life/strict-still-life/long3-boat.json';
import _long3_canoe from '../life/still-life/strict-still-life/long3-canoe.json';
import _long3_hook_with_tail from '../life/still-life/strict-still-life/long3-hook-with-tail.json';
import _long3_integral from '../life/still-life/strict-still-life/long3-integral.json';
import _long3_shillelagh from '../life/still-life/strict-still-life/long3-shillelagh.json';
import _long3_ship from '../life/still-life/strict-still-life/long3-ship.json';
import _long3_snake from '../life/still-life/strict-still-life/long3-snake.json';
import _long4_barge from '../life/still-life/strict-still-life/long4-barge.json';
import _long4_boat from '../life/still-life/strict-still-life/long4-boat.json';
import _long4_canoe from '../life/still-life/strict-still-life/long4-canoe.json';
import _long4_hook_with_tail from '../life/still-life/strict-still-life/long4-hook-with-tail.json';
import _long4_shillelagh from '../life/still-life/strict-still-life/long4-shillelagh.json';
import _long4_ship from '../life/still-life/strict-still-life/long4-ship.json';
import _long4_snake from '../life/still-life/strict-still-life/long4-snake.json';
import _long5_barge from '../life/still-life/strict-still-life/long5-barge.json';
import _long5_boat from '../life/still-life/strict-still-life/long5-boat.json';
import _long5_ship from '../life/still-life/strict-still-life/long5-ship.json';
import _long5_snake from '../life/still-life/strict-still-life/long5-snake.json';
import _long6_barge from '../life/still-life/strict-still-life/long6-barge.json';
import _long6_boat from '../life/still-life/strict-still-life/long6-boat.json';
import _long6_ship from '../life/still-life/strict-still-life/long6-ship.json';
import _long6_snake from '../life/still-life/strict-still-life/long6-snake.json';
import _long7_boat from '../life/still-life/strict-still-life/long7-boat.json';
import _long7_ship from '../life/still-life/strict-still-life/long7-ship.json';
import _long8_boat from '../life/still-life/strict-still-life/long8-boat.json';
import _long8_ship from '../life/still-life/strict-still-life/long8-ship.json';
import _long9_boat from '../life/still-life/strict-still-life/long9-boat.json';
import _long9_ship from '../life/still-life/strict-still-life/long9-ship.json';
import _longhorn from '../life/still-life/strict-still-life/longhorn.json';
import _loop from '../life/still-life/strict-still-life/loop.json';
import _mango_with_block_on_dock from '../life/still-life/strict-still-life/mango-with-block-on-dock.json';
import _mango from '../life/still-life/strict-still-life/mango.json';
import _mickey_mouse from '../life/still-life/strict-still-life/mickey-mouse.json';
import _mirrored_dock from '../life/still-life/strict-still-life/mirrored-dock.json';
import _moose_antlers from '../life/still-life/strict-still-life/moose-antlers.json';
import _o_quad_loaf from '../life/still-life/strict-still-life/o-quad-loaf.json';
import _omnibus_with_tubs from '../life/still-life/strict-still-life/omnibus-with-tubs.json';
import _omnibus from '../life/still-life/strict-still-life/omnibus.json';
import _ortho_loaf_on_table from '../life/still-life/strict-still-life/ortho-loaf-on-table.json';
import _paperclip from '../life/still-life/strict-still-life/paperclip.json';
import _pond_on_dock from '../life/still-life/strict-still-life/pond-on-dock.json';
import _pond from '../life/still-life/strict-still-life/pond.json';
import _professor from '../life/still-life/strict-still-life/professor.json';
import _python_siamese_snake from '../life/still-life/strict-still-life/python-siamese-snake.json';
import _rotated_c from '../life/still-life/strict-still-life/rotated-c.json';
import _rotated_table from '../life/still-life/strict-still-life/rotated-table.json';
import _scorpion from '../life/still-life/strict-still-life/scorpion.json';
import _sesquihat from '../life/still-life/strict-still-life/sesquihat.json';
import _shillelagh_siamese_snake from '../life/still-life/strict-still-life/shillelagh-siamese-snake.json';
import _shillelagh from '../life/still-life/strict-still-life/shillelagh.json';
import _ship_tie_snake from '../life/still-life/strict-still-life/ship-tie-snake.json';
import _ship_tie from '../life/still-life/strict-still-life/ship-tie.json';
import _ship from '../life/still-life/strict-still-life/ship.json';
import _shuriken from '../life/still-life/strict-still-life/shuriken.json';
import _sidewalk from '../life/still-life/strict-still-life/sidewalk.json';
import _skew_R_bees from '../life/still-life/strict-still-life/skew-R-bees.json';
import _small_lake from '../life/still-life/strict-still-life/small-lake.json';
import _snake_bridge_snake from '../life/still-life/strict-still-life/snake-bridge-snake.json';
import _snake_siamese_snake from '../life/still-life/strict-still-life/snake-siamese-snake.json';
import _snake_siamese_very_long_snake from '../life/still-life/strict-still-life/snake-siamese-very-long-snake.json';
import _snake_with_feather from '../life/still-life/strict-still-life/snake-with-feather.json';
import _snake from '../life/still-life/strict-still-life/snake.json';
import _snorkel_loop from '../life/still-life/strict-still-life/snorkel-loop.json';
import _spiral from '../life/still-life/strict-still-life/spiral.json';
import _super_loaf from '../life/still-life/strict-still-life/super-loaf.json';
import _super_mango from '../life/still-life/strict-still-life/super-mango.json';
import _super_pond from '../life/still-life/strict-still-life/super-pond.json';
import _symmetric_scorpion from '../life/still-life/strict-still-life/symmetric-scorpion.json';
import _symmetrical_synapse from '../life/still-life/strict-still-life/symmetrical-synapse.json';
import _table_and_dock from '../life/still-life/strict-still-life/table-and-dock.json';
import _table_and_table from '../life/still-life/strict-still-life/table-and-table.json';
import _teardrop_with_cape from '../life/still-life/strict-still-life/teardrop-with-cape.json';
import _teardrop_with_claw from '../life/still-life/strict-still-life/teardrop-with-claw.json';
import _thirteen_loop from '../life/still-life/strict-still-life/thirteen-loop.json';
import _trans_R_bee_and_R_loaf from '../life/still-life/strict-still-life/trans-R-bee-and-R-loaf.json';
import _trans_barge_with_nine from '../life/still-life/strict-still-life/trans-barge-with-nine.json';
import _trans_barge_with_tail from '../life/still-life/strict-still-life/trans-barge-with-tail.json';
import _trans_block_on_long_hook from '../life/still-life/strict-still-life/trans-block-on-long-hook.json';
import _trans_boat_amphisbaena from '../life/still-life/strict-still-life/trans-boat-amphisbaena.json';
import _trans_boat_line_tub from '../life/still-life/strict-still-life/trans-boat-line-tub.json';
import _trans_boat_on_dock from '../life/still-life/strict-still-life/trans-boat-on-dock.json';
import _trans_boat_on_table from '../life/still-life/strict-still-life/trans-boat-on-table.json';
import _trans_boat_with_nine from '../life/still-life/strict-still-life/trans-boat-with-nine.json';
import _trans_boat_with_tail from '../life/still-life/strict-still-life/trans-boat-with-tail.json';
import _trans_carrier_down_on_table from '../life/still-life/strict-still-life/trans-carrier-down-on-table.json';
import _trans_carrier_tie_snake from '../life/still-life/strict-still-life/trans-carrier-tie-snake.json';
import _trans_carrier_tie from '../life/still-life/strict-still-life/trans-carrier-tie.json';
import _trans_carrier_up_on_table from '../life/still-life/strict-still-life/trans-carrier-up-on-table.json';
import _trans_fuse_with_two_tails from '../life/still-life/strict-still-life/trans-fuse-with-two-tails.json';
import _trans_hook_and_R_bee from '../life/still-life/strict-still-life/trans-hook-and-R-bee.json';
import _trans_loaf_with_tail from '../life/still-life/strict-still-life/trans-loaf-with-tail.json';
import _trans_long_barge_with_tail from '../life/still-life/strict-still-life/trans-long-barge-with-tail.json';
import _trans_long_boat_with_tail from '../life/still-life/strict-still-life/trans-long-boat-with-tail.json';
import _trans_mango_with_tail from '../life/still-life/strict-still-life/trans-mango-with-tail.json';
import _trans_mirrored_R_bee from '../life/still-life/strict-still-life/trans-mirrored-R-bee.json';
import _trans_rotated_R_bee from '../life/still-life/strict-still-life/trans-rotated-R-bee.json';
import _trans_ship_on_table from '../life/still-life/strict-still-life/trans-ship-on-table.json';
import _trans_snake_tie from '../life/still-life/strict-still-life/trans-snake-tie.json';
import _tub_bend_line_tub from '../life/still-life/strict-still-life/tub-bend-line-tub.json';
import _tub_with_cis_tail from '../life/still-life/strict-still-life/tub-with-cis-tail.json';
import _tub_with_long_cis_tail from '../life/still-life/strict-still-life/tub-with-long-cis-tail.json';
import _tub_with_long_tail from '../life/still-life/strict-still-life/tub-with-long-tail.json';
import _tub_with_long3_tail from '../life/still-life/strict-still-life/tub-with-long3-tail.json';
import _tub_with_long4_tail from '../life/still-life/strict-still-life/tub-with-long4-tail.json';
import _tub_with_tail_siamese_snake from '../life/still-life/strict-still-life/tub-with-tail-siamese-snake.json';
import _tub_with_tail_with_cape from '../life/still-life/strict-still-life/tub-with-tail-with-cape.json';
import _tub_with_tail from '../life/still-life/strict-still-life/tub-with-tail.json';
import _tub_with_two_down_cis_tails from '../life/still-life/strict-still-life/tub-with-two-down-cis-tails.json';
import _tub_with_two_down_trans_tails from '../life/still-life/strict-still-life/tub-with-two-down-trans-tails.json';
import _tub_with_two_up_cis_tails from '../life/still-life/strict-still-life/tub-with-two-up-cis-tails.json';
import _tub_with_two_up_trans_tails from '../life/still-life/strict-still-life/tub-with-two-up-trans-tails.json';
import _tub_with_very_long_tail from '../life/still-life/strict-still-life/tub-with-very-long-tail.json';
import _tub from '../life/still-life/strict-still-life/tub.json';
import _twelve_loop from '../life/still-life/strict-still-life/twelve-loop.json';
import _twin_hat from '../life/still-life/strict-still-life/twin-hat.json';
import _up_dove_on_dove from '../life/still-life/strict-still-life/up-dove-on-dove.json';
import _up_snake_on_table from '../life/still-life/strict-still-life/up-snake-on-table.json';
import _up_wing_on_wing from '../life/still-life/strict-still-life/up-wing-on-wing.json';
import _very_long_barge from '../life/still-life/strict-still-life/very-long-barge.json';
import _very_long_boat from '../life/still-life/strict-still-life/very-long-boat.json';
import _very_long_canoe from '../life/still-life/strict-still-life/very-long-canoe.json';
import _very_long_cis_hook_with_tail from '../life/still-life/strict-still-life/very-long-cis-hook-with-tail.json';
import _very_long_cis_shillelagh from '../life/still-life/strict-still-life/very-long-cis-shillelagh.json';
import _very_long_claw_with_tail from '../life/still-life/strict-still-life/very-long-claw-with-tail.json';
import _very_long_hook_with_tail from '../life/still-life/strict-still-life/very-long-hook-with-tail.json';
import _very_long_integral from '../life/still-life/strict-still-life/very-long-integral.json';
import _very_long_melusine from '../life/still-life/strict-still-life/very-long-melusine.json';
import _very_long_prodigal from '../life/still-life/strict-still-life/very-long-prodigal.json';
import _very_long_shillelagh from '../life/still-life/strict-still-life/very-long-shillelagh.json';
import _very_long_ship from '../life/still-life/strict-still-life/very-long-ship.json';
import _very_long_snake from '../life/still-life/strict-still-life/very-long-snake.json';
import _z_quad_loaf from '../life/still-life/strict-still-life/z-quad-loaf.json';

render((
  <Router>
    <article path='/'>
      <h1>Conway's Game of Life</h1>
      
      <h2>Oscillator</h2>
      <nav><Link href='/1-beacon'>{_1_beacon.title}</Link></nav>
      <nav><Link href='/101'>{_101.title}</Link></nav>
      <nav><Link href='/110P62'>{_110P62.title}</Link></nav>
      <nav><Link href='/112P15'>{_112P15.title}</Link></nav>
      <nav><Link href='/117P18'>{_117P18.title}</Link></nav>
      <nav><Link href='/124P21'>{_124P21.title}</Link></nav>
      <nav><Link href='/128P10_2'>{_128P10_2.title}</Link></nav>
      <nav><Link href='/134P25'>{_134P25.title}</Link></nav>
      <nav><Link href='/134P39_1'>{_134P39_1.title}</Link></nav>
      <nav><Link href='/144P24'>{_144P24.title}</Link></nav>
      <nav><Link href='/145P20'>{_145P20.title}</Link></nav>
      <nav><Link href='/14P2_3'>{_14P2_3.title}</Link></nav>
      <nav><Link href='/14P2_4'>{_14P2_4.title}</Link></nav>
      <nav><Link href='/168P22_1'>{_168P22_1.title}</Link></nav>
      <nav><Link href='/186P24'>{_186P24.title}</Link></nav>
      <nav><Link href='/209P8'>{_209P8.title}</Link></nav>
      <nav><Link href='/20P2'>{_20P2.title}</Link></nav>
      <nav><Link href='/21P2'>{_21P2.title}</Link></nav>
      <nav><Link href='/22P2'>{_22P2.title}</Link></nav>
      <nav><Link href='/22P36'>{_22P36.title}</Link></nav>
      <nav><Link href='/230P8'>{_230P8.title}</Link></nav>
      <nav><Link href='/23P2'>{_23P2.title}</Link></nav>
      <nav><Link href='/24P10'>{_24P10.title}</Link></nav>
      <nav><Link href='/24P2'>{_24P2.title}</Link></nav>
      <nav><Link href='/258P3-on-achims-p11'>{_258P3_on_achims_p11.title}</Link></nav>
      <nav><Link href='/258P3'>{_258P3.title}</Link></nav>
      <nav><Link href='/26P2'>{_26P2.title}</Link></nav>
      <nav><Link href='/28P7_1'>{_28P7_1.title}</Link></nav>
      <nav><Link href='/28P7_2'>{_28P7_2.title}</Link></nav>
      <nav><Link href='/28P7_3'>{_28P7_3.title}</Link></nav>
      <nav><Link href='/30P6_1'>{_30P6_1.title}</Link></nav>
      <nav><Link href='/33P3_1'>{_33P3_1.title}</Link></nav>
      <nav><Link href='/35P12_1'>{_35P12_1.title}</Link></nav>
      <nav><Link href='/37P10_1'>{_37P10_1.title}</Link></nav>
      <nav><Link href='/37P7_1'>{_37P7_1.title}</Link></nav>
      <nav><Link href='/38P7_2'>{_38P7_2.title}</Link></nav>
      <nav><Link href='/41P7_2'>{_41P7_2.title}</Link></nav>
      <nav><Link href='/44P12_3'>{_44P12_3.title}</Link></nav>
      <nav><Link href='/44P7_2'>{_44P7_2.title}</Link></nav>
      <nav><Link href='/48P22_1'>{_48P22_1.title}</Link></nav>
      <nav><Link href='/49P88'>{_49P88.title}</Link></nav>
      <nav><Link href='/50P35'>{_50P35.title}</Link></nav>
      <nav><Link href='/53P13'>{_53P13.title}</Link></nav>
      <nav><Link href='/55P10'>{_55P10.title}</Link></nav>
      <nav><Link href='/56P27'>{_56P27.title}</Link></nav>
      <nav><Link href='/5blink'>{_5blink.title}</Link></nav>
      <nav><Link href='/60P312'>{_60P312.title}</Link></nav>
      <nav><Link href='/62P3_1'>{_62P3_1.title}</Link></nav>
      <nav><Link href='/65P48'>{_65P48.title}</Link></nav>
      <nav><Link href='/66P13'>{_66P13.title}</Link></nav>
      <nav><Link href='/68P16'>{_68P16.title}</Link></nav>
      <nav><Link href='/68P32_1'>{_68P32_1.title}</Link></nav>
      <nav><Link href='/68P9'>{_68P9.title}</Link></nav>
      <nav><Link href='/69P48'>{_69P48.title}</Link></nav>
      <nav><Link href='/77P77'>{_77P77.title}</Link></nav>
      <nav><Link href='/78P70'>{_78P70.title}</Link></nav>
      <nav><Link href='/80P6'>{_80P6.title}</Link></nav>
      <nav><Link href='/84P87'>{_84P87.title}</Link></nav>
      <nav><Link href='/87P26'>{_87P26.title}</Link></nav>
      <nav><Link href='/92P51'>{_92P51.title}</Link></nav>
      <nav><Link href='/94P27_1'>{_94P27_1.title}</Link></nav>
      <nav><Link href='/98P25'>{_98P25.title}</Link></nav>
      <nav><Link href='/a-for-all'>{_a_for_all.title}</Link></nav>
      <nav><Link href='/achims-other-p16'>{_achims_other_p16.title}</Link></nav>
      <nav><Link href='/achims-p11'>{_achims_p11.title}</Link></nav>
      <nav><Link href='/achims-p144'>{_achims_p144.title}</Link></nav>
      <nav><Link href='/achims-p16'>{_achims_p16.title}</Link></nav>
      <nav><Link href='/achims-p4'>{_achims_p4.title}</Link></nav>
      <nav><Link href='/achims-p8'>{_achims_p8.title}</Link></nav>
      <nav><Link href='/almosymmetric'>{_almosymmetric.title}</Link></nav>
      <h3>Babbling Brook</h3>
      <nav><Link href='/babbling-brook/babbling-brook-1'>{_babbling_brook_1.title}</Link></nav>
      <nav><Link href='/babbling-brook/beacon'>{_beacon.title}</Link></nav>
      <nav><Link href='/babbling-brook/four-boats'>{_four_boats.title}</Link></nav>
      <nav><Link href='/babbling-brook/great-on-off'>{_great_on_off.title}</Link></nav>
      <nav><Link href='/babbling-brook/light-bulb'>{_light_bulb.title}</Link></nav>
      <nav><Link href='/bakers-dozen'>{_bakers_dozen.title}</Link></nav>
      <nav><Link href='/beacon-on-38P11_1'>{_beacon_on_38P11_1.title}</Link></nav>
      <nav><Link href='/beacon-on-cover'>{_beacon_on_cover.title}</Link></nav>
      <nav><Link href='/beehive-on-long-hook-eating-tub'>{_beehive_on_long_hook_eating_tub.title}</Link></nav>
      <nav><Link href='/beehive-test-tube-baby'>{_beehive_test_tube_baby.title}</Link></nav>
      <nav><Link href='/beluchenkos-other-p37'>{_beluchenkos_other_p37.title}</Link></nav>
      <nav><Link href='/beluchenkos-p13'>{_beluchenkos_p13.title}</Link></nav>
      <nav><Link href='/beluchenkos-p37'>{_beluchenkos_p37.title}</Link></nav>
      <nav><Link href='/beluchenkos-p40'>{_beluchenkos_p40.title}</Link></nav>
      <nav><Link href='/beluchenkos-p51'>{_beluchenkos_p51.title}</Link></nav>
      <nav><Link href='/bent-keys'>{_bent_keys.title}</Link></nav>
      <h3>Billiard Table</h3>
      <nav><Link href='/billiard-table/$rats'>{_$rats.title}</Link></nav>
      <nav><Link href='/billiard-table/1-2-3-4'>{_1_2_3_4.title}</Link></nav>
      <nav><Link href='/billiard-table/1-2-3'>{_1_2_3.title}</Link></nav>
      <nav><Link href='/billiard-table/123P27_1'>{_123P27_1.title}</Link></nav>
      <nav><Link href='/billiard-table/29P9'>{_29P9.title}</Link></nav>
      <nav><Link href='/billiard-table/38P11_1'>{_38P11_1.title}</Link></nav>
      <nav><Link href='/billiard-table/42P10_3'>{_42P10_3.title}</Link></nav>
      <nav><Link href='/billiard-table/44P14'>{_44P14.title}</Link></nav>
      <nav><Link href='/billiard-table/54P17_1'>{_54P17_1.title}</Link></nav>
      <nav><Link href='/billiard-table/a-verage'>{_a_verage.title}</Link></nav>
      <nav><Link href='/billiard-table/airforce'>{_airforce.title}</Link></nav>
      <nav><Link href='/billiard-table/boss'>{_boss.title}</Link></nav>
      <nav><Link href='/billiard-table/burloaferimeter'>{_burloaferimeter.title}</Link></nav>
      <nav><Link href='/billiard-table/cauldron'>{_cauldron.title}</Link></nav>
      <nav><Link href='/billiard-table/champagne-glass'>{_champagne_glass.title}</Link></nav>
      <nav><Link href='/billiard-table/chemist'>{_chemist.title}</Link></nav>
      <nav><Link href='/billiard-table/clock-2'>{_clock_2.title}</Link></nav>
      <nav><Link href='/billiard-table/cousins'>{_cousins.title}</Link></nav>
      <nav><Link href='/billiard-table/crowd'>{_crowd.title}</Link></nav>
      <nav><Link href='/billiard-table/diamond-ring'>{_diamond_ring.title}</Link></nav>
      <nav><Link href='/billiard-table/en-retard'>{_en_retard.title}</Link></nav>
      <nav><Link href='/billiard-table/fore-and-back'>{_fore_and_back.title}</Link></nav>
      <nav><Link href='/billiard-table/frog-II'>{_frog_II.title}</Link></nav>
      <nav><Link href='/billiard-table/germ'>{_germ.title}</Link></nav>
      <nav><Link href='/billiard-table/hertz-oscillator'>{_hertz_oscillator.title}</Link></nav>
      <nav><Link href='/billiard-table/hustler-II'>{_hustler_II.title}</Link></nav>
      <nav><Link href='/billiard-table/hustler'>{_hustler.title}</Link></nav>
      <nav><Link href='/billiard-table/loading-dock'>{_loading_dock.title}</Link></nav>
      <nav><Link href='/billiard-table/mathematician'>{_mathematician.title}</Link></nav>
      <nav><Link href='/billiard-table/merzenichs-p18'>{_merzenichs_p18.title}</Link></nav>
      <nav><Link href='/billiard-table/mini-pressure-cooker'>{_mini_pressure_cooker.title}</Link></nav>
      <nav><Link href='/billiard-table/negentropy'>{_negentropy.title}</Link></nav>
      <nav><Link href='/billiard-table/new-five'>{_new_five.title}</Link></nav>
      <nav><Link href='/billiard-table/pinwheel'>{_pinwheel.title}</Link></nav>
      <nav><Link href='/billiard-table/pressure-cooker'>{_pressure_cooker.title}</Link></nav>
      <nav><Link href='/billiard-table/protein'>{_protein.title}</Link></nav>
      <nav><Link href='/biting-off-more-than-they-can-chew'>{_biting_off_more_than_they_can_chew.title}</Link></nav>
      <nav><Link href='/blinkers-bit-pole'>{_blinkers_bit_pole.title}</Link></nav>
      <nav><Link href='/blocked-p4-1'>{_blocked_p4_1.title}</Link></nav>
      <nav><Link href='/blocked-p4-2'>{_blocked_p4_2.title}</Link></nav>
      <nav><Link href='/blocked-p4-3'>{_blocked_p4_3.title}</Link></nav>
      <nav><Link href='/blocked-p4-4'>{_blocked_p4_4.title}</Link></nav>
      <nav><Link href='/blocked-p4-5'>{_blocked_p4_5.title}</Link></nav>
      <nav><Link href='/blocker'>{_blocker.title}</Link></nav>
      <nav><Link href='/blonker-on-richs-p16'>{_blonker_on_richs_p16.title}</Link></nav>
      <nav><Link href='/blonker'>{_blonker.title}</Link></nav>
      <nav><Link href='/boat-test-tube-baby'>{_boat_test_tube_baby.title}</Link></nav>
      <nav><Link href='/boat-tie-quadpole'>{_boat_tie_quadpole.title}</Link></nav>
      <nav><Link href='/boat-tie-spark-coil'>{_boat_tie_spark_coil.title}</Link></nav>
      <nav><Link href='/boring-p24'>{_boring_p24.title}</Link></nav>
      <nav><Link href='/bottle'>{_bottle.title}</Link></nav>
      <nav><Link href='/buckinghams-p13'>{_buckinghams_p13.title}</Link></nav>
      <nav><Link href='/candelabra'>{_candelabra.title}</Link></nav>
      <nav><Link href='/candlefrobra'>{_candlefrobra.title}</Link></nav>
      <nav><Link href='/caterer-on-28P7_3'>{_caterer_on_28P7_3.title}</Link></nav>
      <nav><Link href='/caterer-on-42P7_1'>{_caterer_on_42P7_1.title}</Link></nav>
      <nav><Link href='/caterer-on-44P7_2'>{_caterer_on_44P7_2.title}</Link></nav>
      <nav><Link href='/caterer-on-68P32'>{_caterer_on_68P32.title}</Link></nav>
      <nav><Link href='/caterer-on-beluchenkos-p13'>{_caterer_on_beluchenkos_p13.title}</Link></nav>
      <nav><Link href='/caterer-on-figure-eight'>{_caterer_on_figure_eight.title}</Link></nav>
      <nav><Link href='/caterer-on-jasons-p22'>{_caterer_on_jasons_p22.title}</Link></nav>
      <nav><Link href='/caterer-on-merzenichs-p31'>{_caterer_on_merzenichs_p31.title}</Link></nav>
      <nav><Link href='/caterer-on-rattlesnake'>{_caterer_on_rattlesnake.title}</Link></nav>
      <nav><Link href='/caterer'>{_caterer.title}</Link></nav>
      <nav><Link href='/cis-beacon-down-on-long-hook'>{_cis_beacon_down_on_long_hook.title}</Link></nav>
      <nav><Link href='/cis-beacon-on-anvil'>{_cis_beacon_on_anvil.title}</Link></nav>
      <nav><Link href='/cis-beacon-on-cap'>{_cis_beacon_on_cap.title}</Link></nav>
      <nav><Link href='/cis-beacon-on-dock'>{_cis_beacon_on_dock.title}</Link></nav>
      <nav><Link href='/cis-beacon-on-table'>{_cis_beacon_on_table.title}</Link></nav>
      <nav><Link href='/cis-beacon-up-on-long-hook'>{_cis_beacon_up_on_long_hook.title}</Link></nav>
      <nav><Link href='/cis-boat-on-long-hook-eating-tub'>{_cis_boat_on_long_hook_eating_tub.title}</Link></nav>
      <nav><Link href='/claw-test-tube-baby'>{_claw_test_tube_baby.title}</Link></nav>
      <nav><Link href='/coes-p8'>{_coes_p8.title}</Link></nav>
      <nav><Link href='/confused-eaters'>{_confused_eaters.title}</Link></nav>
      <nav><Link href='/cross-2'>{_cross_2.title}</Link></nav>
      <nav><Link href='/cross'>{_cross.title}</Link></nav>
      <nav><Link href='/crown'>{_crown.title}</Link></nav>
      <nav><Link href='/david-hilbert'>{_david_hilbert.title}</Link></nav>
      <nav><Link href='/dinner-table'>{_dinner_table.title}</Link></nav>
      <nav><Link href='/double-caterer'>{_double_caterer.title}</Link></nav>
      <nav><Link href='/double-ewe'>{_double_ewe.title}</Link></nav>
      <nav><Link href='/dueling-banjos'>{_dueling_banjos.title}</Link></nav>
      <nav><Link href='/eater-block-frob'>{_eater_block_frob.title}</Link></nav>
      <nav><Link href='/eater-plug'>{_eater_plug.title}</Link></nav>
      <nav><Link href='/electric-fence'>{_electric_fence.title}</Link></nav>
      <nav><Link href='/elkies-p5'>{_elkies_p5.title}</Link></nav>
      <nav><Link href='/ellison-p4-HW-emulator-hybrid'>{_ellison_p4_HW_emulator_hybrid.title}</Link></nav>
      <nav><Link href='/ellison-p4-HW-emulator'>{_ellison_p4_HW_emulator.title}</Link></nav>
      <nav><Link href='/extremely-impressive'>{_extremely_impressive.title}</Link></nav>
      <nav><Link href='/figure-eight-on-22P36'>{_figure_eight_on_22P36.title}</Link></nav>
      <nav><Link href='/figure-eight-on-beluchenkos-p13'>{_figure_eight_on_beluchenkos_p13.title}</Link></nav>
      <nav><Link href='/figure-eight-on-jasons-p22'>{_figure_eight_on_jasons_p22.title}</Link></nav>
      <nav><Link href='/figure-eight-on-pentadecathlon'>{_figure_eight_on_pentadecathlon.title}</Link></nav>
      <nav><Link href='/figure-eight-on-rattlesnake'>{_figure_eight_on_rattlesnake.title}</Link></nav>
      <nav><Link href='/figure-eight'>{_figure_eight.title}</Link></nav>
      <nav><Link href='/fire-spitting'>{_fire_spitting.title}</Link></nav>
      <nav><Link href='/fountain'>{_fountain.title}</Link></nav>
      <nav><Link href='/four-eaters-hassling-four-bookends'>{_four_eaters_hassling_four_bookends.title}</Link></nav>
      <nav><Link href='/four-eaters-hassling-lumps-of-muck'>{_four_eaters_hassling_lumps_of_muck.title}</Link></nav>
      <nav><Link href='/four-molds-hassling-eight-blocks'>{_four_molds_hassling_eight_blocks.title}</Link></nav>
      <nav><Link href='/fox'>{_fox.title}</Link></nav>
      <nav><Link href='/french-kiss'>{_french_kiss.title}</Link></nav>
      <nav><Link href='/fumarole-on-34P14-shuttle'>{_fumarole_on_34P14_shuttle.title}</Link></nav>
      <nav><Link href='/fumarole-on-achims-p11'>{_fumarole_on_achims_p11.title}</Link></nav>
      <nav><Link href='/fumarole-on-beluchenkos-p13'>{_fumarole_on_beluchenkos_p13.title}</Link></nav>
      <nav><Link href='/fumarole-on-p18-bi-block-hassler'>{_fumarole_on_p18_bi_block_hassler.title}</Link></nav>
      <nav><Link href='/fumarole-on-richs-p16'>{_fumarole_on_richs_p16.title}</Link></nav>
      <nav><Link href='/fumarole-on-robs-p16'>{_fumarole_on_robs_p16.title}</Link></nav>
      <nav><Link href='/fumarole'>{_fumarole.title}</Link></nav>
      <nav><Link href='/gabriels-p138'>{_gabriels_p138.title}</Link></nav>
      <nav><Link href='/glasses'>{_glasses.title}</Link></nav>
      <h3>Griddle</h3>
      <nav><Link href='/griddle/beehive-on-griddle'>{_beehive_on_griddle.title}</Link></nav>
      <nav><Link href='/griddle/block-on-griddle'>{_block_on_griddle.title}</Link></nav>
      <nav><Link href='/griddle/blocks-on-griddle'>{_blocks_on_griddle.title}</Link></nav>
      <nav><Link href='/griddle/boat-on-griddle'>{_boat_on_griddle.title}</Link></nav>
      <nav><Link href='/griddle/by-flops'>{_by_flops.title}</Link></nav>
      <nav><Link href='/griddle/griddle-and-dock'>{_griddle_and_dock.title}</Link></nav>
      <nav><Link href='/griddle/griddle-and-table'>{_griddle_and_table.title}</Link></nav>
      <nav><Link href='/harbor'>{_harbor.title}</Link></nav>
      <nav><Link href='/heart'>{_heart.title}</Link></nav>
      <nav><Link href='/heavyweight-emulator'>{_heavyweight_emulator.title}</Link></nav>
      <nav><Link href='/heavyweight-volcano'>{_heavyweight_volcano.title}</Link></nav>
      <nav><Link href='/hebdarole'>{_hebdarole.title}</Link></nav>
      <nav><Link href='/hive-test-tube-baby'>{_hive_test_tube_baby.title}</Link></nav>
      <nav><Link href='/honey-thieves-with-test-tube-baby'>{_honey_thieves_with_test_tube_baby.title}</Link></nav>
      <nav><Link href='/honey-thieves'>{_honey_thieves.title}</Link></nav>
      <nav><Link href='/hook-test-tube-baby'>{_hook_test_tube_baby.title}</Link></nav>
      <nav><Link href='/hooks'>{_hooks.title}</Link></nav>
      <nav><Link href='/jack'>{_jack.title}</Link></nav>
      <nav><Link href='/jam'>{_jam.title}</Link></nav>
      <nav><Link href='/jasons-p11'>{_jasons_p11.title}</Link></nav>
      <nav><Link href='/jasons-p156'>{_jasons_p156.title}</Link></nav>
      <nav><Link href='/jasons-p22'>{_jasons_p22.title}</Link></nav>
      <nav><Link href='/jasons-p33'>{_jasons_p33.title}</Link></nav>
      <nav><Link href='/jasons-p36'>{_jasons_p36.title}</Link></nav>
      <nav><Link href='/jasons-p6'>{_jasons_p6.title}</Link></nav>
      <nav><Link href='/jolson'>{_jolson.title}</Link></nav>
      <nav><Link href='/karels-p15'>{_karels_p15.title}</Link></nav>
      <nav><Link href='/karels-p177'>{_karels_p177.title}</Link></nav>
      <nav><Link href='/karels-p28'>{_karels_p28.title}</Link></nav>
      <nav><Link href='/koks-galaxy'>{_koks_galaxy.title}</Link></nav>
      <nav><Link href='/laputa'>{_laputa.title}</Link></nav>
      <nav><Link href='/lei'>{_lei.title}</Link></nav>
      <nav><Link href='/light-speed-oscillator-1'>{_light_speed_oscillator_1.title}</Link></nav>
      <nav><Link href='/light-speed-oscillator-2'>{_light_speed_oscillator_2.title}</Link></nav>
      <nav><Link href='/light-speed-oscillator-3'>{_light_speed_oscillator_3.title}</Link></nav>
      <nav><Link href='/lightweight-emulator'>{_lightweight_emulator.title}</Link></nav>
      <nav><Link href='/loaf-test-tube-baby'>{_loaf_test_tube_baby.title}</Link></nav>
      <nav><Link href='/loaflipflop'>{_loaflipflop.title}</Link></nav>
      <nav><Link href='/mangled-1-beacon'>{_mangled_1_beacon.title}</Link></nav>
      <nav><Link href='/mango-test-tube-baby'>{_mango_test_tube_baby.title}</Link></nav>
      <nav><Link href='/mazing'>{_mazing.title}</Link></nav>
      <nav><Link href='/merzenichs-p11'>{_merzenichs_p11.title}</Link></nav>
      <nav><Link href='/merzenichs-p31'>{_merzenichs_p31.title}</Link></nav>
      <nav><Link href='/merzenichs-p64'>{_merzenichs_p64.title}</Link></nav>
      <nav><Link href='/middleweight-emulator'>{_middleweight_emulator.title}</Link></nav>
      <nav><Link href='/middleweight-volcano'>{_middleweight_volcano.title}</Link></nav>
      <nav><Link href='/mold-on-34P14-shuttle'>{_mold_on_34P14_shuttle.title}</Link></nav>
      <nav><Link href='/mold-on-41P7_2'>{_mold_on_41P7_2.title}</Link></nav>
      <nav><Link href='/mold-on-fumarole'>{_mold_on_fumarole.title}</Link></nav>
      <nav><Link href='/mold-on-jasons-p22'>{_mold_on_jasons_p22.title}</Link></nav>
      <nav><Link href='/mold-on-long-hook-eating-tub'>{_mold_on_long_hook_eating_tub.title}</Link></nav>
      <nav><Link href='/mold-on-merzenichs-p31'>{_mold_on_merzenichs_p31.title}</Link></nav>
      <nav><Link href='/mold-on-pentadecathlon'>{_mold_on_pentadecathlon.title}</Link></nav>
      <nav><Link href='/mold-on-rattlesnake'>{_mold_on_rattlesnake.title}</Link></nav>
      <nav><Link href='/mold'>{_mold.title}</Link></nav>
      <nav><Link href='/monoclaw-test-tube-baby'>{_monoclaw_test_tube_baby.title}</Link></nav>
      <nav><Link href='/monogram'>{_monogram.title}</Link></nav>
      <nav><Link href='/montana'>{_montana.title}</Link></nav>
      <h3>Muttering Moat</h3>
      <nav><Link href='/muttering-moat/14P2_1'>{_14P2_1.title}</Link></nav>
      <nav><Link href='/muttering-moat/bipole-tie-pseudo-barberpole'>{_bipole_tie_pseudo_barberpole.title}</Link></nav>
      <nav><Link href='/muttering-moat/bipole-tie-ship'>{_bipole_tie_ship.title}</Link></nav>
      <nav><Link href='/muttering-moat/bipole-tie-snake'>{_bipole_tie_snake.title}</Link></nav>
      <nav><Link href='/muttering-moat/bipole'>{_bipole.title}</Link></nav>
      <nav><Link href='/muttering-moat/blinker'>{_blinker.title}</Link></nav>
      <nav><Link href='/muttering-moat/boat-tie-bipole'>{_boat_tie_bipole.title}</Link></nav>
      <nav><Link href='/muttering-moat/boat-tie-tripole'>{_boat_tie_tripole.title}</Link></nav>
      <nav><Link href='/muttering-moat/carrier-tie-bipole'>{_carrier_tie_bipole.title}</Link></nav>
      <nav><Link href='/muttering-moat/cha-cha'>{_cha_cha.title}</Link></nav>
      <nav><Link href='/muttering-moat/circle-of-fire'>{_circle_of_fire.title}</Link></nav>
      <nav><Link href='/muttering-moat/clock'>{_clock.title}</Link></nav>
      <nav><Link href='/muttering-moat/cuphook'>{_cuphook.title}</Link></nav>
      <nav><Link href='/muttering-moat/cyclic'>{_cyclic.title}</Link></nav>
      <nav><Link href='/muttering-moat/decapole'>{_decapole.title}</Link></nav>
      <nav><Link href='/muttering-moat/duodecapole'>{_duodecapole.title}</Link></nav>
      <nav><Link href='/muttering-moat/gray-counter'>{_gray_counter.title}</Link></nav>
      <nav><Link href='/muttering-moat/heptapole'>{_heptapole.title}</Link></nav>
      <nav><Link href='/muttering-moat/hexapole'>{_hexapole.title}</Link></nav>
      <nav><Link href='/muttering-moat/muttering-moat-1'>{_muttering_moat_1.title}</Link></nav>
      <nav><Link href='/muttering-moat/nonapole'>{_nonapole.title}</Link></nav>
      <nav><Link href='/muttering-moat/octapole'>{_octapole.title}</Link></nav>
      <nav><Link href='/muttering-moat/pentapole'>{_pentapole.title}</Link></nav>
      <nav><Link href='/octagon-2'>{_octagon_2.title}</Link></nav>
      <nav><Link href='/octagon-4'>{_octagon_4.title}</Link></nav>
      <nav><Link href='/odd-keys'>{_odd_keys.title}</Link></nav>
      <nav><Link href='/odd-test-tube-baby'>{_odd_test_tube_baby.title}</Link></nav>
      <nav><Link href='/overweight-emulator'>{_overweight_emulator.title}</Link></nav>
      <nav><Link href='/p10-traffic-light-hassler'>{_p10_traffic_light_hassler.title}</Link></nav>
      <nav><Link href='/p11-double-length-signal-injector'>{_p11_double_length_signal_injector.title}</Link></nav>
      <nav><Link href='/p11-pinwheel'>{_p11_pinwheel.title}</Link></nav>
      <nav><Link href='/p110-traffic-jam'>{_p110_traffic_jam.title}</Link></nav>
      <nav><Link href='/p124-lumps-of-muck-hassler'>{_p124_lumps_of_muck_hassler.title}</Link></nav>
      <nav><Link href='/p156-hans-leo-hassler'>{_p156_hans_leo_hassler.title}</Link></nav>
      <nav><Link href='/p18-bi-block-hassler'>{_p18_bi_block_hassler.title}</Link></nav>
      <nav><Link href='/p18-honey-farm-hassler'>{_p18_honey_farm_hassler.title}</Link></nav>
      <nav><Link href='/p200-traffic-jam'>{_p200_traffic_jam.title}</Link></nav>
      <nav><Link href='/p22-lumps-of-muck-hassler'>{_p22_lumps_of_muck_hassler.title}</Link></nav>
      <nav><Link href='/p29-pentadecathlon-hassler'>{_p29_pentadecathlon_hassler.title}</Link></nav>
      <nav><Link href='/p29-traffic-farm-hassler'>{_p29_traffic_farm_hassler.title}</Link></nav>
      <nav><Link href='/p32-blinker-hassler-2'>{_p32_blinker_hassler_2.title}</Link></nav>
      <nav><Link href='/p32-blinker-hassler'>{_p32_blinker_hassler.title}</Link></nav>
      <nav><Link href='/p35-beehive-hassler'>{_p35_beehive_hassler.title}</Link></nav>
      <nav><Link href='/p35-honey-farm-hassler'>{_p35_honey_farm_hassler.title}</Link></nav>
      <nav><Link href='/p36-toad-hassler'>{_p36_toad_hassler.title}</Link></nav>
      <nav><Link href='/p44-pi-heptomino-hassler'>{_p44_pi_heptomino_hassler.title}</Link></nav>
      <nav><Link href='/p44-traffic-light-hassler'>{_p44_traffic_light_hassler.title}</Link></nav>
      <nav><Link href='/p46-based-prng'>{_p46_based_prng.title}</Link></nav>
      <nav><Link href='/p48-pi-hassler'>{_p48_pi_hassler.title}</Link></nav>
      <nav><Link href='/p48-toad-hassler'>{_p48_toad_hassler.title}</Link></nav>
      <nav><Link href='/p49-skewed-pulsar-hassler'>{_p49_skewed_pulsar_hassler.title}</Link></nav>
      <nav><Link href='/p5-pipsquirter'>{_p5_pipsquirter.title}</Link></nav>
      <nav><Link href='/p50-traffic-jam'>{_p50_traffic_jam.title}</Link></nav>
      <nav><Link href='/p55-pre-pulsar-hassler'>{_p55_pre_pulsar_hassler.title}</Link></nav>
      <nav><Link href='/p57-herschel-loop-1'>{_p57_herschel_loop_1.title}</Link></nav>
      <nav><Link href='/p58-toadsucker'>{_p58_toadsucker.title}</Link></nav>
      <nav><Link href='/p59-herschel-loop-1'>{_p59_herschel_loop_1.title}</Link></nav>
      <nav><Link href='/p59-herschel-loop-2'>{_p59_herschel_loop_2.title}</Link></nav>
      <nav><Link href='/p6-shuttle'>{_p6_shuttle.title}</Link></nav>
      <nav><Link href='/p6-thumb'>{_p6_thumb.title}</Link></nav>
      <nav><Link href='/p60-b-heptomino-hassler'>{_p60_b_heptomino_hassler.title}</Link></nav>
      <nav><Link href='/p60-traffic-light-hassler'>{_p60_traffic_light_hassler.title}</Link></nav>
      <nav><Link href='/p61-herschel-loop-1'>{_p61_herschel_loop_1.title}</Link></nav>
      <nav><Link href='/p61-herschel-loop-2'>{_p61_herschel_loop_2.title}</Link></nav>
      <nav><Link href='/p64-thunderbird-hassler'>{_p64_thunderbird_hassler.title}</Link></nav>
      <nav><Link href='/p72-quasi-shuttle'>{_p72_quasi_shuttle.title}</Link></nav>
      <nav><Link href='/pedestle'>{_pedestle.title}</Link></nav>
      <nav><Link href='/penny-lane'>{_penny_lane.title}</Link></nav>
      <nav><Link href='/pentadecathlon-on-37p7_1'>{_pentadecathlon_on_37p7_1.title}</Link></nav>
      <nav><Link href='/pentadecathlon-on-snacker'>{_pentadecathlon_on_snacker.title}</Link></nav>
      <nav><Link href='/pentadecathlon-on-thumb-1'>{_pentadecathlon_on_thumb_1.title}</Link></nav>
      <nav><Link href='/pentadecathlon'>{_pentadecathlon.title}</Link></nav>
      <nav><Link href='/pentant'>{_pentant.title}</Link></nav>
      <nav><Link href='/pentoad-1h2'>{_pentoad_1h2.title}</Link></nav>
      <nav><Link href='/pentoad-2'>{_pentoad_2.title}</Link></nav>
      <nav><Link href='/pentoad'>{_pentoad.title}</Link></nav>
      <h3>Phoenix</h3>
      <nav><Link href='/phoenix/phoenix-1'>{_phoenix_1.title}</Link></nav>
      <nav><Link href='/pi-orbital'>{_pi_orbital.title}</Link></nav>
      <nav><Link href='/pi-portraitor'>{_pi_portraitor.title}</Link></nav>
      <nav><Link href='/pipsquirter-1'>{_pipsquirter_1.title}</Link></nav>
      <nav><Link href='/pipsquirter-2'>{_pipsquirter_2.title}</Link></nav>
      <nav><Link href='/piston'>{_piston.title}</Link></nav>
      <nav><Link href='/popover'>{_popover.title}</Link></nav>
      <nav><Link href='/pseudo-barberpole-on-jasons-p22'>{_pseudo_barberpole_on_jasons_p22.title}</Link></nav>
      <nav><Link href='/pseudo-barberpole-on-rattlesnake'>{_pseudo_barberpole_on_rattlesnake.title}</Link></nav>
      <nav><Link href='/pseudo-barberpole'>{_pseudo_barberpole.title}</Link></nav>
      <nav><Link href='/pulsar-quadrant'>{_pulsar_quadrant.title}</Link></nav>
      <nav><Link href='/pulsar'>{_pulsar.title}</Link></nav>
      <h3>Relay</h3>
      <nav><Link href='/relay/106P135'>{_106P135.title}</Link></nav>
      <nav><Link href='/relay/6-bits'>{_6_bits.title}</Link></nav>
      <nav><Link href='/relay/double-x'>{_double_x.title}</Link></nav>
      <nav><Link href='/relay/hectic'>{_hectic.title}</Link></nav>
      <nav><Link href='/relay/metamorphosis-II'>{_metamorphosis_II.title}</Link></nav>
      <nav><Link href='/relay/p26-glider-shuttle'>{_p26_glider_shuttle.title}</Link></nav>
      <nav><Link href='/relay/p42-glider-shuttle'>{_p42_glider_shuttle.title}</Link></nav>
      <nav><Link href='/relay/p43-snark-loop'>{_p43_snark_loop.title}</Link></nav>
      <nav><Link href='/relay/p49-bumper-loop'>{_p49_bumper_loop.title}</Link></nav>
      <nav><Link href='/relay/p49-glider-shuttle'>{_p49_glider_shuttle.title}</Link></nav>
      <nav><Link href='/relay/p50-glider-shuttle'>{_p50_glider_shuttle.title}</Link></nav>
      <nav><Link href='/relay/p57-bumper-loop'>{_p57_bumper_loop.title}</Link></nav>
      <nav><Link href='/relay/p60-glider-shuttle'>{_p60_glider_shuttle.title}</Link></nav>
      <h3>Shuttle</h3>
      <nav><Link href='/shuttle/34P14-shuttle'>{_34P14_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/carnival-shuttle'>{_carnival_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/centinal'>{_centinal.title}</Link></nav>
      <nav><Link href='/shuttle/diuresis'>{_diuresis.title}</Link></nav>
      <nav><Link href='/shuttle/eureka'>{_eureka.title}</Link></nav>
      <nav><Link href='/shuttle/gourmet'>{_gourmet.title}</Link></nav>
      <nav><Link href='/shuttle/newshuttle'>{_newshuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p130-shuttle'>{_p130_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p24-shuttle'>{_p24_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p26-pre-pulsar-shuttle'>{_p26_pre_pulsar_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p28-pre-pulsar-shuttle'>{_p28_pre_pulsar_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p29-pre-pulsar-shuttle'>{_p29_pre_pulsar_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p36-shuttle'>{_p36_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p40-b-heptomino-shuttle'>{_p40_b_heptomino_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p47-pre-pulsar-shuttle'>{_p47_pre_pulsar_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p54-shuttle'>{_p54_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p56-b-heptomino-shuttle'>{_p56_b_heptomino_shuttle.title}</Link></nav>
      <nav><Link href='/shuttle/p58-pre-pulsar-shuttle'>{_p58_pre_pulsar_shuttle.title}</Link></nav>
      <h3>T Nose</h3>
      <nav><Link href='/t-nose/blocked-p4-t-nose-hybrid'>{_blocked_p4_t_nose_hybrid.title}</Link></nav>
      <nav><Link href='/t-nose/blocked-p4-t-nose'>{_blocked_p4_t_nose.title}</Link></nav>
      <nav><Link href='/toad'>{_toad.title}</Link></nav>
      <h2>Still Life</h2>
      <h3>Eater</h3>
      <nav><Link href='/eater/7x9-eater'>{_7x9_eater.title}</Link></nav>
      <nav><Link href='/eater/century-eater'>{_century_eater.title}</Link></nav>
      <nav><Link href='/eater/eater-1'>{_eater_1.title}</Link></nav>
      <nav><Link href='/eater/eater-2'>{_eater_2.title}</Link></nav>
      <nav><Link href='/eater/eater-3'>{_eater_3.title}</Link></nav>
      <nav><Link href='/eater/eater-4'>{_eater_4.title}</Link></nav>
      <nav><Link href='/eater/sidesnagger'>{_sidesnagger.title}</Link></nav>
      <nav><Link href='/eater/tub-with-tail-eater'>{_tub_with_tail_eater.title}</Link></nav>
      <h3>Pseudo Still Life</h3>
      <nav><Link href='/pseudo-still-life/bi-block'>{_bi_block.title}</Link></nav>
      <nav><Link href='/pseudo-still-life/bi-boat'>{_bi_boat.title}</Link></nav>
      <nav><Link href='/pseudo-still-life/block-on-boat'>{_block_on_boat.title}</Link></nav>
      <nav><Link href='/pseudo-still-life/pond-on-pond'>{_pond_on_pond.title}</Link></nav>
      <nav><Link href='/pseudo-still-life/quad-pseudo-still-life'>{_quad_pseudo_still_life.title}</Link></nav>
      <nav><Link href='/pseudo-still-life/triple-pseudo-still-life'>{_triple_pseudo_still_life.title}</Link></nav>
      <h3>Strict Still Life</h3>
      <nav><Link href='/strict-still-life/15-bent-paperclip'>{_15_bent_paperclip.title}</Link></nav>
      <nav><Link href='/strict-still-life/29-bit-still-life-no1'>{_29_bit_still_life_no1.title}</Link></nav>
      <nav><Link href='/strict-still-life/31_4'>{_31_4.title}</Link></nav>
      <nav><Link href='/strict-still-life/R-bee-and-snake'>{_R_bee_and_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/R-bee-on-beehive'>{_R_bee_on_beehive.title}</Link></nav>
      <nav><Link href='/strict-still-life/R-bee-with-feather'>{_R_bee_with_feather.title}</Link></nav>
      <nav><Link href='/strict-still-life/R-mango-and-house'>{_R_mango_and_house.title}</Link></nav>
      <nav><Link href='/strict-still-life/aircraft-carrier'>{_aircraft_carrier.title}</Link></nav>
      <nav><Link href='/strict-still-life/amphisbaena'>{_amphisbaena.title}</Link></nav>
      <nav><Link href='/strict-still-life/aries-betwixt-two-blocks'>{_aries_betwixt_two_blocks.title}</Link></nav>
      <nav><Link href='/strict-still-life/asymmetric-amphisbaena'>{_asymmetric_amphisbaena.title}</Link></nav>
      <nav><Link href='/strict-still-life/barge-siamese-loaf'>{_barge_siamese_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/barge-with-long-tail'>{_barge_with_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/barge-with-very-long-tail'>{_barge_with_very_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/barge'>{_barge.title}</Link></nav>
      <nav><Link href='/strict-still-life/bee-hat'>{_bee_hat.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-at-beehive'>{_beehive_at_beehive.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-at-claw'>{_beehive_at_claw.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-at-loaf'>{_beehive_at_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-on-cap'>{_beehive_on_cap.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-on-dock'>{_beehive_on_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-on-table'>{_beehive_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-with-bend-tail'>{_beehive_with_bend_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-with-nine'>{_beehive_with_nine.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive-with-tail'>{_beehive_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/beehive'>{_beehive.title}</Link></nav>
      <nav><Link href='/strict-still-life/bi-cap'>{_bi_cap.title}</Link></nav>
      <nav><Link href='/strict-still-life/bi-loaf2'>{_bi_loaf2.title}</Link></nav>
      <nav><Link href='/strict-still-life/bi-pond'>{_bi_pond.title}</Link></nav>
      <nav><Link href='/strict-still-life/big-s'>{_big_s.title}</Link></nav>
      <nav><Link href='/strict-still-life/block-on-cap'>{_block_on_cap.title}</Link></nav>
      <nav><Link href='/strict-still-life/block-on-cover'>{_block_on_cover.title}</Link></nav>
      <nav><Link href='/strict-still-life/block-on-dock'>{_block_on_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/block-on-table'>{_block_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/block'>{_block.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-tie-eater-head'>{_boat_tie_eater_head.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-tie-eater-tail'>{_boat_tie_eater_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-tie-long-boat'>{_boat_tie_long_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-tie-long-snake'>{_boat_tie_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-tie-ship'>{_boat_tie_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-tie-snake'>{_boat_tie_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-tie'>{_boat_tie.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-with-cis-tail'>{_boat_with_cis_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-with-hooked-tail'>{_boat_with_hooked_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-with-long-tail'>{_boat_with_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-with-long3-tail'>{_boat_with_long3_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat-with-very-long-tail'>{_boat_with_very_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/boat'>{_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/bookend-table-snake'>{_bookend_table_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/bookends-siamese-tables'>{_bookends_siamese_tables.title}</Link></nav>
      <nav><Link href='/strict-still-life/bookends'>{_bookends.title}</Link></nav>
      <nav><Link href='/strict-still-life/broken-elevener'>{_broken_elevener.title}</Link></nav>
      <nav><Link href='/strict-still-life/broken-snake'>{_broken_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/canoe-siamese-snake'>{_canoe_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/canoe'>{_canoe.title}</Link></nav>
      <nav><Link href='/strict-still-life/cap-and-dock'>{_cap_and_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-bridge-carrier'>{_carrier_bridge_carrier.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-bridge-snake'>{_carrier_bridge_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-bridge-table'>{_carrier_bridge_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-canoe'>{_carrier_siamese_canoe.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-carrier'>{_carrier_siamese_carrier.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-dock'>{_carrier_siamese_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-eater-head'>{_carrier_siamese_eater_head.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-eater-tail'>{_carrier_siamese_eater_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-hook-with-tail-hook'>{_carrier_siamese_hook_with_tail_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-hook-with-tail-tail'>{_carrier_siamese_hook_with_tail_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-long-snake'>{_carrier_siamese_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-shillelagh'>{_carrier_siamese_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-tub-with-tail'>{_carrier_siamese_tub_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-siamese-very-long-snake'>{_carrier_siamese_very_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-tie-boat'>{_carrier_tie_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-tie-ship'>{_carrier_tie_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/carrier-with-feather'>{_carrier_with_feather.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-R-bee-and-R-loaf'>{_cis_R_bee_and_R_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-barge-with-nine'>{_cis_barge_with_nine.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-barge-with-tail'>{_cis_barge_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-block-on-long-hook'>{_cis_block_on_long_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-boat-amphisbaena'>{_cis_boat_amphisbaena.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-boat-and-cap'>{_cis_boat_and_cap.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-boat-line-tub'>{_cis_boat_line_tub.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-boat-on-dock'>{_cis_boat_on_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-boat-on-table'>{_cis_boat_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-boat-with-nine'>{_cis_boat_with_nine.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-boat-with-tail'>{_cis_boat_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-carrier-down-on-table'>{_cis_carrier_down_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-carrier-tie-snake'>{_cis_carrier_tie_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-carrier-tie'>{_cis_carrier_tie.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-carrier-up-on-table'>{_cis_carrier_up_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-fuse-with-two-tails'>{_cis_fuse_with_two_tails.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-hook-and-R-bee'>{_cis_hook_and_R_bee.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-hook-with-tail'>{_cis_hook_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-loaf-with-tail'>{_cis_loaf_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-long-barge-with-tail'>{_cis_long_barge_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-long-boat-with-tail'>{_cis_long_boat_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-mango-with-tail'>{_cis_mango_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-mirrored-R-bee'>{_cis_mirrored_R_bee.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-mirrored-worm-siamese-cis-mirrored-worm'>{_cis_mirrored_worm_siamese_cis_mirrored_worm.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-mirrored-worm'>{_cis_mirrored_worm.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-rotated-R-bee'>{_cis_rotated_R_bee.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-rotated-hook'>{_cis_rotated_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-shillelagh'>{_cis_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-ship-on-table'>{_cis_ship_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/cis-snake-tie'>{_cis_snake_tie.title}</Link></nav>
      <nav><Link href='/strict-still-life/claw-siamese-tub-with-cape'>{_claw_siamese_tub_with_cape.title}</Link></nav>
      <nav><Link href='/strict-still-life/claw-with-boat-with-tail'>{_claw_with_boat_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/claw-with-tail'>{_claw_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/claw-with-tub-with-tail'>{_claw_with_tub_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/clips'>{_clips.title}</Link></nav>
      <nav><Link href='/strict-still-life/cloverleaf-interchange'>{_cloverleaf_interchange.title}</Link></nav>
      <nav><Link href='/strict-still-life/cthulhu'>{_cthulhu.title}</Link></nav>
      <nav><Link href='/strict-still-life/dead-spark-coil'>{_dead_spark_coil.title}</Link></nav>
      <nav><Link href='/strict-still-life/dock-and-long-hook'>{_dock_and_long_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/double-claw'>{_double_claw.title}</Link></nav>
      <nav><Link href='/strict-still-life/down-snake-on-table'>{_down_snake_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-bridge-eater'>{_eater_bridge_eater.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-head-siamese-eater-head'>{_eater_head_siamese_eater_head.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-head-siamese-eater-tail'>{_eater_head_siamese_eater_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-head-siamese-long-snake'>{_eater_head_siamese_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-head-siamese-snake'>{_eater_head_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-tail-siamese-eater-tail'>{_eater_tail_siamese_eater_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-tail-siamese-long-snake'>{_eater_tail_siamese_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-tail-siamese-snake'>{_eater_tail_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-with-cape'>{_eater_with_cape.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-with-head-feather'>{_eater_with_head_feather.title}</Link></nav>
      <nav><Link href='/strict-still-life/eater-with-tail-feather'>{_eater_with_tail_feather.title}</Link></nav>
      <nav><Link href='/strict-still-life/egyptian-walk'>{_egyptian_walk.title}</Link></nav>
      <nav><Link href='/strict-still-life/eleven-loop'>{_eleven_loop.title}</Link></nav>
      <nav><Link href='/strict-still-life/elevener'>{_elevener.title}</Link></nav>
      <nav><Link href='/strict-still-life/fourteener'>{_fourteener.title}</Link></nav>
      <nav><Link href='/strict-still-life/fuse-with-tail-and-integral'>{_fuse_with_tail_and_integral.title}</Link></nav>
      <nav><Link href='/strict-still-life/fuse-with-tail-and-long-tail'>{_fuse_with_tail_and_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/fuse-with-tail-and-very-long-tail'>{_fuse_with_tail_and_very_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/fuse-with-two-long-tails'>{_fuse_with_two_long_tails.title}</Link></nav>
      <nav><Link href='/strict-still-life/grin-reagent'>{_grin_reagent.title}</Link></nav>
      <nav><Link href='/strict-still-life/gull-with-tub'>{_gull_with_tub.title}</Link></nav>
      <nav><Link href='/strict-still-life/half-bakery'>{_half_bakery.title}</Link></nav>
      <nav><Link href='/strict-still-life/hat-siamese-vase'>{_hat_siamese_vase.title}</Link></nav>
      <nav><Link href='/strict-still-life/hat'>{_hat.title}</Link></nav>
      <nav><Link href='/strict-still-life/hexagonal-key'>{_hexagonal_key.title}</Link></nav>
      <nav><Link href='/strict-still-life/honeybarge'>{_honeybarge.title}</Link></nav>
      <nav><Link href='/strict-still-life/honeycomb'>{_honeycomb.title}</Link></nav>
      <nav><Link href='/strict-still-life/hook-with-nine'>{_hook_with_nine.title}</Link></nav>
      <nav><Link href='/strict-still-life/hook-with-tail-hook-siamese-snake'>{_hook_with_tail_hook_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/hook-with-tail-tail-siamese-snake'>{_hook_with_tail_tail_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/hook-with-tail-with-cape'>{_hook_with_tail_with_cape.title}</Link></nav>
      <nav><Link href='/strict-still-life/hook-with-tail'>{_hook_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/hook-with-two-tails'>{_hook_with_two_tails.title}</Link></nav>
      <nav><Link href='/strict-still-life/house-on-house-siamese-table-on-table-weld-hat-siamese-hat'>{_house_on_house_siamese_table_on_table_weld_hat_siamese_hat.title}</Link></nav>
      <nav><Link href='/strict-still-life/hungry-hat'>{_hungry_hat.title}</Link></nav>
      <nav><Link href='/strict-still-life/inflected-clips'>{_inflected_clips.title}</Link></nav>
      <nav><Link href='/strict-still-life/inflected-long-snake'>{_inflected_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/inflexion'>{_inflexion.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-sign'>{_integral_sign.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-cis-hook'>{_integral_with_cis_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-hook-and-tail'>{_integral_with_hook_and_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-hook'>{_integral_with_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-long-hook-and-tub'>{_integral_with_long_hook_and_tub.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-long-hook'>{_integral_with_long_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-tub-and-hook'>{_integral_with_tub_and_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-tub-and-tail'>{_integral_with_tub_and_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-tub'>{_integral_with_tub.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-two-tubs'>{_integral_with_two_tubs.title}</Link></nav>
      <nav><Link href='/strict-still-life/integral-with-very-long-hook'>{_integral_with_very_long_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/inverted-double-claw'>{_inverted_double_claw.title}</Link></nav>
      <nav><Link href='/strict-still-life/lake2'>{_lake2.title}</Link></nav>
      <nav><Link href='/strict-still-life/loaf-back-tie-loaf'>{_loaf_back_tie_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/loaf-siamese-loaf'>{_loaf_siamese_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/loaf-tie-eater-with-tail'>{_loaf_tie_eater_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/loaf'>{_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-barge'>{_long_barge.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-boat-tie-ship'>{_long_boat_tie_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-boat-with-long-tail'>{_long_boat_with_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-boat'>{_long_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-canoe'>{_long_canoe.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-cis-hook-with-tail'>{_long_cis_hook_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-cis-shillelagh'>{_long_cis_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-claw-with-tail'>{_long_claw_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-hook-with-tail'>{_long_hook_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-integral-with-boat'>{_long_integral_with_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-integral'>{_long_integral.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-melusine'>{_long_melusine.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-prodigal'>{_long_prodigal.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-shillelagh'>{_long_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-ship'>{_long_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-snake-siamese-long-snake'>{_long_snake_siamese_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-snake'>{_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/long-tub-claw-with-tail'>{_long_tub_claw_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/long10-boat'>{_long10_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long10-ship'>{_long10_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long3-barge'>{_long3_barge.title}</Link></nav>
      <nav><Link href='/strict-still-life/long3-boat'>{_long3_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long3-canoe'>{_long3_canoe.title}</Link></nav>
      <nav><Link href='/strict-still-life/long3-hook-with-tail'>{_long3_hook_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/long3-integral'>{_long3_integral.title}</Link></nav>
      <nav><Link href='/strict-still-life/long3-shillelagh'>{_long3_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/long3-ship'>{_long3_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long3-snake'>{_long3_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/long4-barge'>{_long4_barge.title}</Link></nav>
      <nav><Link href='/strict-still-life/long4-boat'>{_long4_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long4-canoe'>{_long4_canoe.title}</Link></nav>
      <nav><Link href='/strict-still-life/long4-hook-with-tail'>{_long4_hook_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/long4-shillelagh'>{_long4_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/long4-ship'>{_long4_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long4-snake'>{_long4_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/long5-barge'>{_long5_barge.title}</Link></nav>
      <nav><Link href='/strict-still-life/long5-boat'>{_long5_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long5-ship'>{_long5_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long5-snake'>{_long5_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/long6-barge'>{_long6_barge.title}</Link></nav>
      <nav><Link href='/strict-still-life/long6-boat'>{_long6_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long6-ship'>{_long6_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long6-snake'>{_long6_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/long7-boat'>{_long7_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long7-ship'>{_long7_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long8-boat'>{_long8_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long8-ship'>{_long8_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/long9-boat'>{_long9_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/long9-ship'>{_long9_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/longhorn'>{_longhorn.title}</Link></nav>
      <nav><Link href='/strict-still-life/loop'>{_loop.title}</Link></nav>
      <nav><Link href='/strict-still-life/mango-with-block-on-dock'>{_mango_with_block_on_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/mango'>{_mango.title}</Link></nav>
      <nav><Link href='/strict-still-life/mickey-mouse'>{_mickey_mouse.title}</Link></nav>
      <nav><Link href='/strict-still-life/mirrored-dock'>{_mirrored_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/moose-antlers'>{_moose_antlers.title}</Link></nav>
      <nav><Link href='/strict-still-life/o-quad-loaf'>{_o_quad_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/omnibus-with-tubs'>{_omnibus_with_tubs.title}</Link></nav>
      <nav><Link href='/strict-still-life/omnibus'>{_omnibus.title}</Link></nav>
      <nav><Link href='/strict-still-life/ortho-loaf-on-table'>{_ortho_loaf_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/paperclip'>{_paperclip.title}</Link></nav>
      <nav><Link href='/strict-still-life/pond-on-dock'>{_pond_on_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/pond'>{_pond.title}</Link></nav>
      <nav><Link href='/strict-still-life/professor'>{_professor.title}</Link></nav>
      <nav><Link href='/strict-still-life/python-siamese-snake'>{_python_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/rotated-c'>{_rotated_c.title}</Link></nav>
      <nav><Link href='/strict-still-life/rotated-table'>{_rotated_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/scorpion'>{_scorpion.title}</Link></nav>
      <nav><Link href='/strict-still-life/sesquihat'>{_sesquihat.title}</Link></nav>
      <nav><Link href='/strict-still-life/shillelagh-siamese-snake'>{_shillelagh_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/shillelagh'>{_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/ship-tie-snake'>{_ship_tie_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/ship-tie'>{_ship_tie.title}</Link></nav>
      <nav><Link href='/strict-still-life/ship'>{_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/shuriken'>{_shuriken.title}</Link></nav>
      <nav><Link href='/strict-still-life/sidewalk'>{_sidewalk.title}</Link></nav>
      <nav><Link href='/strict-still-life/skew-R-bees'>{_skew_R_bees.title}</Link></nav>
      <nav><Link href='/strict-still-life/small-lake'>{_small_lake.title}</Link></nav>
      <nav><Link href='/strict-still-life/snake-bridge-snake'>{_snake_bridge_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/snake-siamese-snake'>{_snake_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/snake-siamese-very-long-snake'>{_snake_siamese_very_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/snake-with-feather'>{_snake_with_feather.title}</Link></nav>
      <nav><Link href='/strict-still-life/snake'>{_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/snorkel-loop'>{_snorkel_loop.title}</Link></nav>
      <nav><Link href='/strict-still-life/spiral'>{_spiral.title}</Link></nav>
      <nav><Link href='/strict-still-life/super-loaf'>{_super_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/super-mango'>{_super_mango.title}</Link></nav>
      <nav><Link href='/strict-still-life/super-pond'>{_super_pond.title}</Link></nav>
      <nav><Link href='/strict-still-life/symmetric-scorpion'>{_symmetric_scorpion.title}</Link></nav>
      <nav><Link href='/strict-still-life/symmetrical-synapse'>{_symmetrical_synapse.title}</Link></nav>
      <nav><Link href='/strict-still-life/table-and-dock'>{_table_and_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/table-and-table'>{_table_and_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/teardrop-with-cape'>{_teardrop_with_cape.title}</Link></nav>
      <nav><Link href='/strict-still-life/teardrop-with-claw'>{_teardrop_with_claw.title}</Link></nav>
      <nav><Link href='/strict-still-life/thirteen-loop'>{_thirteen_loop.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-R-bee-and-R-loaf'>{_trans_R_bee_and_R_loaf.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-barge-with-nine'>{_trans_barge_with_nine.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-barge-with-tail'>{_trans_barge_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-block-on-long-hook'>{_trans_block_on_long_hook.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-boat-amphisbaena'>{_trans_boat_amphisbaena.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-boat-line-tub'>{_trans_boat_line_tub.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-boat-on-dock'>{_trans_boat_on_dock.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-boat-on-table'>{_trans_boat_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-boat-with-nine'>{_trans_boat_with_nine.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-boat-with-tail'>{_trans_boat_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-carrier-down-on-table'>{_trans_carrier_down_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-carrier-tie-snake'>{_trans_carrier_tie_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-carrier-tie'>{_trans_carrier_tie.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-carrier-up-on-table'>{_trans_carrier_up_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-fuse-with-two-tails'>{_trans_fuse_with_two_tails.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-hook-and-R-bee'>{_trans_hook_and_R_bee.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-loaf-with-tail'>{_trans_loaf_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-long-barge-with-tail'>{_trans_long_barge_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-long-boat-with-tail'>{_trans_long_boat_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-mango-with-tail'>{_trans_mango_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-mirrored-R-bee'>{_trans_mirrored_R_bee.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-rotated-R-bee'>{_trans_rotated_R_bee.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-ship-on-table'>{_trans_ship_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/trans-snake-tie'>{_trans_snake_tie.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-bend-line-tub'>{_tub_bend_line_tub.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-cis-tail'>{_tub_with_cis_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-long-cis-tail'>{_tub_with_long_cis_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-long-tail'>{_tub_with_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-long3-tail'>{_tub_with_long3_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-long4-tail'>{_tub_with_long4_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-tail-siamese-snake'>{_tub_with_tail_siamese_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-tail-with-cape'>{_tub_with_tail_with_cape.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-tail'>{_tub_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-two-down-cis-tails'>{_tub_with_two_down_cis_tails.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-two-down-trans-tails'>{_tub_with_two_down_trans_tails.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-two-up-cis-tails'>{_tub_with_two_up_cis_tails.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-two-up-trans-tails'>{_tub_with_two_up_trans_tails.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub-with-very-long-tail'>{_tub_with_very_long_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/tub'>{_tub.title}</Link></nav>
      <nav><Link href='/strict-still-life/twelve-loop'>{_twelve_loop.title}</Link></nav>
      <nav><Link href='/strict-still-life/twin-hat'>{_twin_hat.title}</Link></nav>
      <nav><Link href='/strict-still-life/up-dove-on-dove'>{_up_dove_on_dove.title}</Link></nav>
      <nav><Link href='/strict-still-life/up-snake-on-table'>{_up_snake_on_table.title}</Link></nav>
      <nav><Link href='/strict-still-life/up-wing-on-wing'>{_up_wing_on_wing.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-barge'>{_very_long_barge.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-boat'>{_very_long_boat.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-canoe'>{_very_long_canoe.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-cis-hook-with-tail'>{_very_long_cis_hook_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-cis-shillelagh'>{_very_long_cis_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-claw-with-tail'>{_very_long_claw_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-hook-with-tail'>{_very_long_hook_with_tail.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-integral'>{_very_long_integral.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-melusine'>{_very_long_melusine.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-prodigal'>{_very_long_prodigal.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-shillelagh'>{_very_long_shillelagh.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-ship'>{_very_long_ship.title}</Link></nav>
      <nav><Link href='/strict-still-life/very-long-snake'>{_very_long_snake.title}</Link></nav>
      <nav><Link href='/strict-still-life/z-quad-loaf'>{_z_quad_loaf.title}</Link></nav>
    </article>

    <Pattern path='/1-beacon' lifeData={_1_beacon} />
    <Pattern path='/101' lifeData={_101} />
    <Pattern path='/110P62' lifeData={_110P62} />
    <Pattern path='/112P15' lifeData={_112P15} />
    <Pattern path='/117P18' lifeData={_117P18} />
    <Pattern path='/124P21' lifeData={_124P21} />
    <Pattern path='/128P10_2' lifeData={_128P10_2} />
    <Pattern path='/134P25' lifeData={_134P25} />
    <Pattern path='/134P39_1' lifeData={_134P39_1} />
    <Pattern path='/144P24' lifeData={_144P24} />
    <Pattern path='/145P20' lifeData={_145P20} />
    <Pattern path='/14P2_3' lifeData={_14P2_3} />
    <Pattern path='/14P2_4' lifeData={_14P2_4} />
    <Pattern path='/168P22_1' lifeData={_168P22_1} />
    <Pattern path='/186P24' lifeData={_186P24} />
    <Pattern path='/209P8' lifeData={_209P8} />
    <Pattern path='/20P2' lifeData={_20P2} />
    <Pattern path='/21P2' lifeData={_21P2} />
    <Pattern path='/22P2' lifeData={_22P2} />
    <Pattern path='/22P36' lifeData={_22P36} />
    <Pattern path='/230P8' lifeData={_230P8} />
    <Pattern path='/23P2' lifeData={_23P2} />
    <Pattern path='/24P10' lifeData={_24P10} />
    <Pattern path='/24P2' lifeData={_24P2} />
    <Pattern path='/258P3-on-achims-p11' lifeData={_258P3_on_achims_p11} />
    <Pattern path='/258P3' lifeData={_258P3} />
    <Pattern path='/26P2' lifeData={_26P2} />
    <Pattern path='/28P7_1' lifeData={_28P7_1} />
    <Pattern path='/28P7_2' lifeData={_28P7_2} />
    <Pattern path='/28P7_3' lifeData={_28P7_3} />
    <Pattern path='/30P6_1' lifeData={_30P6_1} />
    <Pattern path='/33P3_1' lifeData={_33P3_1} />
    <Pattern path='/35P12_1' lifeData={_35P12_1} />
    <Pattern path='/37P10_1' lifeData={_37P10_1} />
    <Pattern path='/37P7_1' lifeData={_37P7_1} />
    <Pattern path='/38P7_2' lifeData={_38P7_2} />
    <Pattern path='/41P7_2' lifeData={_41P7_2} />
    <Pattern path='/44P12_3' lifeData={_44P12_3} />
    <Pattern path='/44P7_2' lifeData={_44P7_2} />
    <Pattern path='/48P22_1' lifeData={_48P22_1} />
    <Pattern path='/49P88' lifeData={_49P88} />
    <Pattern path='/50P35' lifeData={_50P35} />
    <Pattern path='/53P13' lifeData={_53P13} />
    <Pattern path='/55P10' lifeData={_55P10} />
    <Pattern path='/56P27' lifeData={_56P27} />
    <Pattern path='/5blink' lifeData={_5blink} />
    <Pattern path='/60P312' lifeData={_60P312} />
    <Pattern path='/62P3_1' lifeData={_62P3_1} />
    <Pattern path='/65P48' lifeData={_65P48} />
    <Pattern path='/66P13' lifeData={_66P13} />
    <Pattern path='/68P16' lifeData={_68P16} />
    <Pattern path='/68P32_1' lifeData={_68P32_1} />
    <Pattern path='/68P9' lifeData={_68P9} />
    <Pattern path='/69P48' lifeData={_69P48} />
    <Pattern path='/77P77' lifeData={_77P77} />
    <Pattern path='/78P70' lifeData={_78P70} />
    <Pattern path='/80P6' lifeData={_80P6} />
    <Pattern path='/84P87' lifeData={_84P87} />
    <Pattern path='/87P26' lifeData={_87P26} />
    <Pattern path='/92P51' lifeData={_92P51} />
    <Pattern path='/94P27_1' lifeData={_94P27_1} />
    <Pattern path='/98P25' lifeData={_98P25} />
    <Pattern path='/a-for-all' lifeData={_a_for_all} />
    <Pattern path='/achims-other-p16' lifeData={_achims_other_p16} />
    <Pattern path='/achims-p11' lifeData={_achims_p11} />
    <Pattern path='/achims-p144' lifeData={_achims_p144} />
    <Pattern path='/achims-p16' lifeData={_achims_p16} />
    <Pattern path='/achims-p4' lifeData={_achims_p4} />
    <Pattern path='/achims-p8' lifeData={_achims_p8} />
    <Pattern path='/almosymmetric' lifeData={_almosymmetric} />
    <Pattern path='/babbling-brook/babbling-brook-1' lifeData={_babbling_brook_1} />
    <Pattern path='/babbling-brook/beacon' lifeData={_beacon} />
    <Pattern path='/babbling-brook/four-boats' lifeData={_four_boats} />
    <Pattern path='/babbling-brook/great-on-off' lifeData={_great_on_off} />
    <Pattern path='/babbling-brook/light-bulb' lifeData={_light_bulb} />
    <Pattern path='/bakers-dozen' lifeData={_bakers_dozen} />
    <Pattern path='/beacon-on-38P11_1' lifeData={_beacon_on_38P11_1} />
    <Pattern path='/beacon-on-cover' lifeData={_beacon_on_cover} />
    <Pattern path='/beehive-on-long-hook-eating-tub' lifeData={_beehive_on_long_hook_eating_tub} />
    <Pattern path='/beehive-test-tube-baby' lifeData={_beehive_test_tube_baby} />
    <Pattern path='/beluchenkos-other-p37' lifeData={_beluchenkos_other_p37} />
    <Pattern path='/beluchenkos-p13' lifeData={_beluchenkos_p13} />
    <Pattern path='/beluchenkos-p37' lifeData={_beluchenkos_p37} />
    <Pattern path='/beluchenkos-p40' lifeData={_beluchenkos_p40} />
    <Pattern path='/beluchenkos-p51' lifeData={_beluchenkos_p51} />
    <Pattern path='/bent-keys' lifeData={_bent_keys} />
    <Pattern path='/billiard-table/$rats' lifeData={_$rats} />
    <Pattern path='/billiard-table/1-2-3-4' lifeData={_1_2_3_4} />
    <Pattern path='/billiard-table/1-2-3' lifeData={_1_2_3} />
    <Pattern path='/billiard-table/123P27_1' lifeData={_123P27_1} />
    <Pattern path='/billiard-table/29P9' lifeData={_29P9} />
    <Pattern path='/billiard-table/38P11_1' lifeData={_38P11_1} />
    <Pattern path='/billiard-table/42P10_3' lifeData={_42P10_3} />
    <Pattern path='/billiard-table/44P14' lifeData={_44P14} />
    <Pattern path='/billiard-table/54P17_1' lifeData={_54P17_1} />
    <Pattern path='/billiard-table/a-verage' lifeData={_a_verage} />
    <Pattern path='/billiard-table/airforce' lifeData={_airforce} />
    <Pattern path='/billiard-table/boss' lifeData={_boss} />
    <Pattern path='/billiard-table/burloaferimeter' lifeData={_burloaferimeter} />
    <Pattern path='/billiard-table/cauldron' lifeData={_cauldron} />
    <Pattern path='/billiard-table/champagne-glass' lifeData={_champagne_glass} />
    <Pattern path='/billiard-table/chemist' lifeData={_chemist} />
    <Pattern path='/billiard-table/clock-2' lifeData={_clock_2} />
    <Pattern path='/billiard-table/cousins' lifeData={_cousins} />
    <Pattern path='/billiard-table/crowd' lifeData={_crowd} />
    <Pattern path='/billiard-table/diamond-ring' lifeData={_diamond_ring} />
    <Pattern path='/billiard-table/en-retard' lifeData={_en_retard} />
    <Pattern path='/billiard-table/fore-and-back' lifeData={_fore_and_back} />
    <Pattern path='/billiard-table/frog-II' lifeData={_frog_II} />
    <Pattern path='/billiard-table/germ' lifeData={_germ} />
    <Pattern path='/billiard-table/hertz-oscillator' lifeData={_hertz_oscillator} />
    <Pattern path='/billiard-table/hustler-II' lifeData={_hustler_II} />
    <Pattern path='/billiard-table/hustler' lifeData={_hustler} />
    <Pattern path='/billiard-table/loading-dock' lifeData={_loading_dock} />
    <Pattern path='/billiard-table/mathematician' lifeData={_mathematician} />
    <Pattern path='/billiard-table/merzenichs-p18' lifeData={_merzenichs_p18} />
    <Pattern path='/billiard-table/mini-pressure-cooker' lifeData={_mini_pressure_cooker} />
    <Pattern path='/billiard-table/negentropy' lifeData={_negentropy} />
    <Pattern path='/billiard-table/new-five' lifeData={_new_five} />
    <Pattern path='/billiard-table/pinwheel' lifeData={_pinwheel} />
    <Pattern path='/billiard-table/pressure-cooker' lifeData={_pressure_cooker} />
    <Pattern path='/billiard-table/protein' lifeData={_protein} />
    <Pattern path='/biting-off-more-than-they-can-chew' lifeData={_biting_off_more_than_they_can_chew} />
    <Pattern path='/blinkers-bit-pole' lifeData={_blinkers_bit_pole} />
    <Pattern path='/blocked-p4-1' lifeData={_blocked_p4_1} />
    <Pattern path='/blocked-p4-2' lifeData={_blocked_p4_2} />
    <Pattern path='/blocked-p4-3' lifeData={_blocked_p4_3} />
    <Pattern path='/blocked-p4-4' lifeData={_blocked_p4_4} />
    <Pattern path='/blocked-p4-5' lifeData={_blocked_p4_5} />
    <Pattern path='/blocker' lifeData={_blocker} />
    <Pattern path='/blonker-on-richs-p16' lifeData={_blonker_on_richs_p16} />
    <Pattern path='/blonker' lifeData={_blonker} />
    <Pattern path='/boat-test-tube-baby' lifeData={_boat_test_tube_baby} />
    <Pattern path='/boat-tie-quadpole' lifeData={_boat_tie_quadpole} />
    <Pattern path='/boat-tie-spark-coil' lifeData={_boat_tie_spark_coil} />
    <Pattern path='/boring-p24' lifeData={_boring_p24} />
    <Pattern path='/bottle' lifeData={_bottle} />
    <Pattern path='/buckinghams-p13' lifeData={_buckinghams_p13} />
    <Pattern path='/candelabra' lifeData={_candelabra} />
    <Pattern path='/candlefrobra' lifeData={_candlefrobra} />
    <Pattern path='/caterer-on-28P7_3' lifeData={_caterer_on_28P7_3} />
    <Pattern path='/caterer-on-42P7_1' lifeData={_caterer_on_42P7_1} />
    <Pattern path='/caterer-on-44P7_2' lifeData={_caterer_on_44P7_2} />
    <Pattern path='/caterer-on-68P32' lifeData={_caterer_on_68P32} />
    <Pattern path='/caterer-on-beluchenkos-p13' lifeData={_caterer_on_beluchenkos_p13} />
    <Pattern path='/caterer-on-figure-eight' lifeData={_caterer_on_figure_eight} />
    <Pattern path='/caterer-on-jasons-p22' lifeData={_caterer_on_jasons_p22} />
    <Pattern path='/caterer-on-merzenichs-p31' lifeData={_caterer_on_merzenichs_p31} />
    <Pattern path='/caterer-on-rattlesnake' lifeData={_caterer_on_rattlesnake} />
    <Pattern path='/caterer' lifeData={_caterer} />
    <Pattern path='/cis-beacon-down-on-long-hook' lifeData={_cis_beacon_down_on_long_hook} />
    <Pattern path='/cis-beacon-on-anvil' lifeData={_cis_beacon_on_anvil} />
    <Pattern path='/cis-beacon-on-cap' lifeData={_cis_beacon_on_cap} />
    <Pattern path='/cis-beacon-on-dock' lifeData={_cis_beacon_on_dock} />
    <Pattern path='/cis-beacon-on-table' lifeData={_cis_beacon_on_table} />
    <Pattern path='/cis-beacon-up-on-long-hook' lifeData={_cis_beacon_up_on_long_hook} />
    <Pattern path='/cis-boat-on-long-hook-eating-tub' lifeData={_cis_boat_on_long_hook_eating_tub} />
    <Pattern path='/claw-test-tube-baby' lifeData={_claw_test_tube_baby} />
    <Pattern path='/coes-p8' lifeData={_coes_p8} />
    <Pattern path='/confused-eaters' lifeData={_confused_eaters} />
    <Pattern path='/cross-2' lifeData={_cross_2} />
    <Pattern path='/cross' lifeData={_cross} />
    <Pattern path='/crown' lifeData={_crown} />
    <Pattern path='/david-hilbert' lifeData={_david_hilbert} />
    <Pattern path='/dinner-table' lifeData={_dinner_table} />
    <Pattern path='/double-caterer' lifeData={_double_caterer} />
    <Pattern path='/double-ewe' lifeData={_double_ewe} />
    <Pattern path='/dueling-banjos' lifeData={_dueling_banjos} />
    <Pattern path='/eater-block-frob' lifeData={_eater_block_frob} />
    <Pattern path='/eater-plug' lifeData={_eater_plug} />
    <Pattern path='/electric-fence' lifeData={_electric_fence} />
    <Pattern path='/elkies-p5' lifeData={_elkies_p5} />
    <Pattern path='/ellison-p4-HW-emulator-hybrid' lifeData={_ellison_p4_HW_emulator_hybrid} />
    <Pattern path='/ellison-p4-HW-emulator' lifeData={_ellison_p4_HW_emulator} />
    <Pattern path='/extremely-impressive' lifeData={_extremely_impressive} />
    <Pattern path='/figure-eight-on-22P36' lifeData={_figure_eight_on_22P36} />
    <Pattern path='/figure-eight-on-beluchenkos-p13' lifeData={_figure_eight_on_beluchenkos_p13} />
    <Pattern path='/figure-eight-on-jasons-p22' lifeData={_figure_eight_on_jasons_p22} />
    <Pattern path='/figure-eight-on-pentadecathlon' lifeData={_figure_eight_on_pentadecathlon} />
    <Pattern path='/figure-eight-on-rattlesnake' lifeData={_figure_eight_on_rattlesnake} />
    <Pattern path='/figure-eight' lifeData={_figure_eight} />
    <Pattern path='/fire-spitting' lifeData={_fire_spitting} />
    <Pattern path='/fountain' lifeData={_fountain} />
    <Pattern path='/four-eaters-hassling-four-bookends' lifeData={_four_eaters_hassling_four_bookends} />
    <Pattern path='/four-eaters-hassling-lumps-of-muck' lifeData={_four_eaters_hassling_lumps_of_muck} />
    <Pattern path='/four-molds-hassling-eight-blocks' lifeData={_four_molds_hassling_eight_blocks} />
    <Pattern path='/fox' lifeData={_fox} />
    <Pattern path='/french-kiss' lifeData={_french_kiss} />
    <Pattern path='/fumarole-on-34P14-shuttle' lifeData={_fumarole_on_34P14_shuttle} />
    <Pattern path='/fumarole-on-achims-p11' lifeData={_fumarole_on_achims_p11} />
    <Pattern path='/fumarole-on-beluchenkos-p13' lifeData={_fumarole_on_beluchenkos_p13} />
    <Pattern path='/fumarole-on-p18-bi-block-hassler' lifeData={_fumarole_on_p18_bi_block_hassler} />
    <Pattern path='/fumarole-on-richs-p16' lifeData={_fumarole_on_richs_p16} />
    <Pattern path='/fumarole-on-robs-p16' lifeData={_fumarole_on_robs_p16} />
    <Pattern path='/fumarole' lifeData={_fumarole} />
    <Pattern path='/gabriels-p138' lifeData={_gabriels_p138} />
    <Pattern path='/glasses' lifeData={_glasses} />
    <Pattern path='/griddle/beehive-on-griddle' lifeData={_beehive_on_griddle} />
    <Pattern path='/griddle/block-on-griddle' lifeData={_block_on_griddle} />
    <Pattern path='/griddle/blocks-on-griddle' lifeData={_blocks_on_griddle} />
    <Pattern path='/griddle/boat-on-griddle' lifeData={_boat_on_griddle} />
    <Pattern path='/griddle/by-flops' lifeData={_by_flops} />
    <Pattern path='/griddle/griddle-and-dock' lifeData={_griddle_and_dock} />
    <Pattern path='/griddle/griddle-and-table' lifeData={_griddle_and_table} />
    <Pattern path='/harbor' lifeData={_harbor} />
    <Pattern path='/heart' lifeData={_heart} />
    <Pattern path='/heavyweight-emulator' lifeData={_heavyweight_emulator} />
    <Pattern path='/heavyweight-volcano' lifeData={_heavyweight_volcano} />
    <Pattern path='/hebdarole' lifeData={_hebdarole} />
    <Pattern path='/hive-test-tube-baby' lifeData={_hive_test_tube_baby} />
    <Pattern path='/honey-thieves-with-test-tube-baby' lifeData={_honey_thieves_with_test_tube_baby} />
    <Pattern path='/honey-thieves' lifeData={_honey_thieves} />
    <Pattern path='/hook-test-tube-baby' lifeData={_hook_test_tube_baby} />
    <Pattern path='/hooks' lifeData={_hooks} />
    <Pattern path='/jack' lifeData={_jack} />
    <Pattern path='/jam' lifeData={_jam} />
    <Pattern path='/jasons-p11' lifeData={_jasons_p11} />
    <Pattern path='/jasons-p156' lifeData={_jasons_p156} />
    <Pattern path='/jasons-p22' lifeData={_jasons_p22} />
    <Pattern path='/jasons-p33' lifeData={_jasons_p33} />
    <Pattern path='/jasons-p36' lifeData={_jasons_p36} />
    <Pattern path='/jasons-p6' lifeData={_jasons_p6} />
    <Pattern path='/jolson' lifeData={_jolson} />
    <Pattern path='/karels-p15' lifeData={_karels_p15} />
    <Pattern path='/karels-p177' lifeData={_karels_p177} />
    <Pattern path='/karels-p28' lifeData={_karels_p28} />
    <Pattern path='/koks-galaxy' lifeData={_koks_galaxy} />
    <Pattern path='/laputa' lifeData={_laputa} />
    <Pattern path='/lei' lifeData={_lei} />
    <Pattern path='/light-speed-oscillator-1' lifeData={_light_speed_oscillator_1} />
    <Pattern path='/light-speed-oscillator-2' lifeData={_light_speed_oscillator_2} />
    <Pattern path='/light-speed-oscillator-3' lifeData={_light_speed_oscillator_3} />
    <Pattern path='/lightweight-emulator' lifeData={_lightweight_emulator} />
    <Pattern path='/loaf-test-tube-baby' lifeData={_loaf_test_tube_baby} />
    <Pattern path='/loaflipflop' lifeData={_loaflipflop} />
    <Pattern path='/mangled-1-beacon' lifeData={_mangled_1_beacon} />
    <Pattern path='/mango-test-tube-baby' lifeData={_mango_test_tube_baby} />
    <Pattern path='/mazing' lifeData={_mazing} />
    <Pattern path='/merzenichs-p11' lifeData={_merzenichs_p11} />
    <Pattern path='/merzenichs-p31' lifeData={_merzenichs_p31} />
    <Pattern path='/merzenichs-p64' lifeData={_merzenichs_p64} />
    <Pattern path='/middleweight-emulator' lifeData={_middleweight_emulator} />
    <Pattern path='/middleweight-volcano' lifeData={_middleweight_volcano} />
    <Pattern path='/mold-on-34P14-shuttle' lifeData={_mold_on_34P14_shuttle} />
    <Pattern path='/mold-on-41P7_2' lifeData={_mold_on_41P7_2} />
    <Pattern path='/mold-on-fumarole' lifeData={_mold_on_fumarole} />
    <Pattern path='/mold-on-jasons-p22' lifeData={_mold_on_jasons_p22} />
    <Pattern path='/mold-on-long-hook-eating-tub' lifeData={_mold_on_long_hook_eating_tub} />
    <Pattern path='/mold-on-merzenichs-p31' lifeData={_mold_on_merzenichs_p31} />
    <Pattern path='/mold-on-pentadecathlon' lifeData={_mold_on_pentadecathlon} />
    <Pattern path='/mold-on-rattlesnake' lifeData={_mold_on_rattlesnake} />
    <Pattern path='/mold' lifeData={_mold} />
    <Pattern path='/monoclaw-test-tube-baby' lifeData={_monoclaw_test_tube_baby} />
    <Pattern path='/monogram' lifeData={_monogram} />
    <Pattern path='/montana' lifeData={_montana} />
    <Pattern path='/muttering-moat/14P2_1' lifeData={_14P2_1} />
    <Pattern path='/muttering-moat/bipole-tie-pseudo-barberpole' lifeData={_bipole_tie_pseudo_barberpole} />
    <Pattern path='/muttering-moat/bipole-tie-ship' lifeData={_bipole_tie_ship} />
    <Pattern path='/muttering-moat/bipole-tie-snake' lifeData={_bipole_tie_snake} />
    <Pattern path='/muttering-moat/bipole' lifeData={_bipole} />
    <Pattern path='/muttering-moat/blinker' lifeData={_blinker} />
    <Pattern path='/muttering-moat/boat-tie-bipole' lifeData={_boat_tie_bipole} />
    <Pattern path='/muttering-moat/boat-tie-tripole' lifeData={_boat_tie_tripole} />
    <Pattern path='/muttering-moat/carrier-tie-bipole' lifeData={_carrier_tie_bipole} />
    <Pattern path='/muttering-moat/cha-cha' lifeData={_cha_cha} />
    <Pattern path='/muttering-moat/circle-of-fire' lifeData={_circle_of_fire} />
    <Pattern path='/muttering-moat/clock' lifeData={_clock} />
    <Pattern path='/muttering-moat/cuphook' lifeData={_cuphook} />
    <Pattern path='/muttering-moat/cyclic' lifeData={_cyclic} />
    <Pattern path='/muttering-moat/decapole' lifeData={_decapole} />
    <Pattern path='/muttering-moat/duodecapole' lifeData={_duodecapole} />
    <Pattern path='/muttering-moat/gray-counter' lifeData={_gray_counter} />
    <Pattern path='/muttering-moat/heptapole' lifeData={_heptapole} />
    <Pattern path='/muttering-moat/hexapole' lifeData={_hexapole} />
    <Pattern path='/muttering-moat/muttering-moat-1' lifeData={_muttering_moat_1} />
    <Pattern path='/muttering-moat/nonapole' lifeData={_nonapole} />
    <Pattern path='/muttering-moat/octapole' lifeData={_octapole} />
    <Pattern path='/muttering-moat/pentapole' lifeData={_pentapole} />
    <Pattern path='/octagon-2' lifeData={_octagon_2} />
    <Pattern path='/octagon-4' lifeData={_octagon_4} />
    <Pattern path='/odd-keys' lifeData={_odd_keys} />
    <Pattern path='/odd-test-tube-baby' lifeData={_odd_test_tube_baby} />
    <Pattern path='/overweight-emulator' lifeData={_overweight_emulator} />
    <Pattern path='/p10-traffic-light-hassler' lifeData={_p10_traffic_light_hassler} />
    <Pattern path='/p11-double-length-signal-injector' lifeData={_p11_double_length_signal_injector} />
    <Pattern path='/p11-pinwheel' lifeData={_p11_pinwheel} />
    <Pattern path='/p110-traffic-jam' lifeData={_p110_traffic_jam} />
    <Pattern path='/p124-lumps-of-muck-hassler' lifeData={_p124_lumps_of_muck_hassler} />
    <Pattern path='/p156-hans-leo-hassler' lifeData={_p156_hans_leo_hassler} />
    <Pattern path='/p18-bi-block-hassler' lifeData={_p18_bi_block_hassler} />
    <Pattern path='/p18-honey-farm-hassler' lifeData={_p18_honey_farm_hassler} />
    <Pattern path='/p200-traffic-jam' lifeData={_p200_traffic_jam} />
    <Pattern path='/p22-lumps-of-muck-hassler' lifeData={_p22_lumps_of_muck_hassler} />
    <Pattern path='/p29-pentadecathlon-hassler' lifeData={_p29_pentadecathlon_hassler} />
    <Pattern path='/p29-traffic-farm-hassler' lifeData={_p29_traffic_farm_hassler} />
    <Pattern path='/p32-blinker-hassler-2' lifeData={_p32_blinker_hassler_2} />
    <Pattern path='/p32-blinker-hassler' lifeData={_p32_blinker_hassler} />
    <Pattern path='/p35-beehive-hassler' lifeData={_p35_beehive_hassler} />
    <Pattern path='/p35-honey-farm-hassler' lifeData={_p35_honey_farm_hassler} />
    <Pattern path='/p36-toad-hassler' lifeData={_p36_toad_hassler} />
    <Pattern path='/p44-pi-heptomino-hassler' lifeData={_p44_pi_heptomino_hassler} />
    <Pattern path='/p44-traffic-light-hassler' lifeData={_p44_traffic_light_hassler} />
    <Pattern path='/p46-based-prng' lifeData={_p46_based_prng} />
    <Pattern path='/p48-pi-hassler' lifeData={_p48_pi_hassler} />
    <Pattern path='/p48-toad-hassler' lifeData={_p48_toad_hassler} />
    <Pattern path='/p49-skewed-pulsar-hassler' lifeData={_p49_skewed_pulsar_hassler} />
    <Pattern path='/p5-pipsquirter' lifeData={_p5_pipsquirter} />
    <Pattern path='/p50-traffic-jam' lifeData={_p50_traffic_jam} />
    <Pattern path='/p55-pre-pulsar-hassler' lifeData={_p55_pre_pulsar_hassler} />
    <Pattern path='/p57-herschel-loop-1' lifeData={_p57_herschel_loop_1} />
    <Pattern path='/p58-toadsucker' lifeData={_p58_toadsucker} />
    <Pattern path='/p59-herschel-loop-1' lifeData={_p59_herschel_loop_1} />
    <Pattern path='/p59-herschel-loop-2' lifeData={_p59_herschel_loop_2} />
    <Pattern path='/p6-shuttle' lifeData={_p6_shuttle} />
    <Pattern path='/p6-thumb' lifeData={_p6_thumb} />
    <Pattern path='/p60-b-heptomino-hassler' lifeData={_p60_b_heptomino_hassler} />
    <Pattern path='/p60-traffic-light-hassler' lifeData={_p60_traffic_light_hassler} />
    <Pattern path='/p61-herschel-loop-1' lifeData={_p61_herschel_loop_1} />
    <Pattern path='/p61-herschel-loop-2' lifeData={_p61_herschel_loop_2} />
    <Pattern path='/p64-thunderbird-hassler' lifeData={_p64_thunderbird_hassler} />
    <Pattern path='/p72-quasi-shuttle' lifeData={_p72_quasi_shuttle} />
    <Pattern path='/pedestle' lifeData={_pedestle} />
    <Pattern path='/penny-lane' lifeData={_penny_lane} />
    <Pattern path='/pentadecathlon-on-37p7_1' lifeData={_pentadecathlon_on_37p7_1} />
    <Pattern path='/pentadecathlon-on-snacker' lifeData={_pentadecathlon_on_snacker} />
    <Pattern path='/pentadecathlon-on-thumb-1' lifeData={_pentadecathlon_on_thumb_1} />
    <Pattern path='/pentadecathlon' lifeData={_pentadecathlon} />
    <Pattern path='/pentant' lifeData={_pentant} />
    <Pattern path='/pentoad-1h2' lifeData={_pentoad_1h2} />
    <Pattern path='/pentoad-2' lifeData={_pentoad_2} />
    <Pattern path='/pentoad' lifeData={_pentoad} />
    <Pattern path='/phoenix/phoenix-1' lifeData={_phoenix_1} />
    <Pattern path='/pi-orbital' lifeData={_pi_orbital} />
    <Pattern path='/pi-portraitor' lifeData={_pi_portraitor} />
    <Pattern path='/pipsquirter-1' lifeData={_pipsquirter_1} />
    <Pattern path='/pipsquirter-2' lifeData={_pipsquirter_2} />
    <Pattern path='/piston' lifeData={_piston} />
    <Pattern path='/popover' lifeData={_popover} />
    <Pattern path='/pseudo-barberpole-on-jasons-p22' lifeData={_pseudo_barberpole_on_jasons_p22} />
    <Pattern path='/pseudo-barberpole-on-rattlesnake' lifeData={_pseudo_barberpole_on_rattlesnake} />
    <Pattern path='/pseudo-barberpole' lifeData={_pseudo_barberpole} />
    <Pattern path='/pulsar-quadrant' lifeData={_pulsar_quadrant} />
    <Pattern path='/pulsar' lifeData={_pulsar} />
    <Pattern path='/relay/106P135' lifeData={_106P135} />
    <Pattern path='/relay/6-bits' lifeData={_6_bits} />
    <Pattern path='/relay/double-x' lifeData={_double_x} />
    <Pattern path='/relay/hectic' lifeData={_hectic} />
    <Pattern path='/relay/metamorphosis-II' lifeData={_metamorphosis_II} />
    <Pattern path='/relay/p26-glider-shuttle' lifeData={_p26_glider_shuttle} />
    <Pattern path='/relay/p42-glider-shuttle' lifeData={_p42_glider_shuttle} />
    <Pattern path='/relay/p43-snark-loop' lifeData={_p43_snark_loop} />
    <Pattern path='/relay/p49-bumper-loop' lifeData={_p49_bumper_loop} />
    <Pattern path='/relay/p49-glider-shuttle' lifeData={_p49_glider_shuttle} />
    <Pattern path='/relay/p50-glider-shuttle' lifeData={_p50_glider_shuttle} />
    <Pattern path='/relay/p57-bumper-loop' lifeData={_p57_bumper_loop} />
    <Pattern path='/relay/p60-glider-shuttle' lifeData={_p60_glider_shuttle} />
    <Pattern path='/shuttle/34P14-shuttle' lifeData={_34P14_shuttle} />
    <Pattern path='/shuttle/carnival-shuttle' lifeData={_carnival_shuttle} />
    <Pattern path='/shuttle/centinal' lifeData={_centinal} />
    <Pattern path='/shuttle/diuresis' lifeData={_diuresis} />
    <Pattern path='/shuttle/eureka' lifeData={_eureka} />
    <Pattern path='/shuttle/gourmet' lifeData={_gourmet} />
    <Pattern path='/shuttle/newshuttle' lifeData={_newshuttle} />
    <Pattern path='/shuttle/p130-shuttle' lifeData={_p130_shuttle} />
    <Pattern path='/shuttle/p24-shuttle' lifeData={_p24_shuttle} />
    <Pattern path='/shuttle/p26-pre-pulsar-shuttle' lifeData={_p26_pre_pulsar_shuttle} />
    <Pattern path='/shuttle/p28-pre-pulsar-shuttle' lifeData={_p28_pre_pulsar_shuttle} />
    <Pattern path='/shuttle/p29-pre-pulsar-shuttle' lifeData={_p29_pre_pulsar_shuttle} />
    <Pattern path='/shuttle/p36-shuttle' lifeData={_p36_shuttle} />
    <Pattern path='/shuttle/p40-b-heptomino-shuttle' lifeData={_p40_b_heptomino_shuttle} />
    <Pattern path='/shuttle/p47-pre-pulsar-shuttle' lifeData={_p47_pre_pulsar_shuttle} />
    <Pattern path='/shuttle/p54-shuttle' lifeData={_p54_shuttle} />
    <Pattern path='/shuttle/p56-b-heptomino-shuttle' lifeData={_p56_b_heptomino_shuttle} />
    <Pattern path='/shuttle/p58-pre-pulsar-shuttle' lifeData={_p58_pre_pulsar_shuttle} />
    <Pattern path='/t-nose/blocked-p4-t-nose-hybrid' lifeData={_blocked_p4_t_nose_hybrid} />
    <Pattern path='/t-nose/blocked-p4-t-nose' lifeData={_blocked_p4_t_nose} />
    <Pattern path='/toad' lifeData={_toad} />
    <Pattern path='/eater/7x9-eater' lifeData={_7x9_eater} />
    <Pattern path='/eater/century-eater' lifeData={_century_eater} />
    <Pattern path='/eater/eater-1' lifeData={_eater_1} />
    <Pattern path='/eater/eater-2' lifeData={_eater_2} />
    <Pattern path='/eater/eater-3' lifeData={_eater_3} />
    <Pattern path='/eater/eater-4' lifeData={_eater_4} />
    <Pattern path='/eater/sidesnagger' lifeData={_sidesnagger} />
    <Pattern path='/eater/tub-with-tail-eater' lifeData={_tub_with_tail_eater} />
    <Pattern path='/pseudo-still-life/bi-block' lifeData={_bi_block} />
    <Pattern path='/pseudo-still-life/bi-boat' lifeData={_bi_boat} />
    <Pattern path='/pseudo-still-life/block-on-boat' lifeData={_block_on_boat} />
    <Pattern path='/pseudo-still-life/pond-on-pond' lifeData={_pond_on_pond} />
    <Pattern path='/pseudo-still-life/quad-pseudo-still-life' lifeData={_quad_pseudo_still_life} />
    <Pattern path='/pseudo-still-life/triple-pseudo-still-life' lifeData={_triple_pseudo_still_life} />
    <Pattern path='/strict-still-life/15-bent-paperclip' lifeData={_15_bent_paperclip} />
    <Pattern path='/strict-still-life/29-bit-still-life-no1' lifeData={_29_bit_still_life_no1} />
    <Pattern path='/strict-still-life/31_4' lifeData={_31_4} />
    <Pattern path='/strict-still-life/R-bee-and-snake' lifeData={_R_bee_and_snake} />
    <Pattern path='/strict-still-life/R-bee-on-beehive' lifeData={_R_bee_on_beehive} />
    <Pattern path='/strict-still-life/R-bee-with-feather' lifeData={_R_bee_with_feather} />
    <Pattern path='/strict-still-life/R-mango-and-house' lifeData={_R_mango_and_house} />
    <Pattern path='/strict-still-life/aircraft-carrier' lifeData={_aircraft_carrier} />
    <Pattern path='/strict-still-life/amphisbaena' lifeData={_amphisbaena} />
    <Pattern path='/strict-still-life/aries-betwixt-two-blocks' lifeData={_aries_betwixt_two_blocks} />
    <Pattern path='/strict-still-life/asymmetric-amphisbaena' lifeData={_asymmetric_amphisbaena} />
    <Pattern path='/strict-still-life/barge-siamese-loaf' lifeData={_barge_siamese_loaf} />
    <Pattern path='/strict-still-life/barge-with-long-tail' lifeData={_barge_with_long_tail} />
    <Pattern path='/strict-still-life/barge-with-very-long-tail' lifeData={_barge_with_very_long_tail} />
    <Pattern path='/strict-still-life/barge' lifeData={_barge} />
    <Pattern path='/strict-still-life/bee-hat' lifeData={_bee_hat} />
    <Pattern path='/strict-still-life/beehive-at-beehive' lifeData={_beehive_at_beehive} />
    <Pattern path='/strict-still-life/beehive-at-claw' lifeData={_beehive_at_claw} />
    <Pattern path='/strict-still-life/beehive-at-loaf' lifeData={_beehive_at_loaf} />
    <Pattern path='/strict-still-life/beehive-on-cap' lifeData={_beehive_on_cap} />
    <Pattern path='/strict-still-life/beehive-on-dock' lifeData={_beehive_on_dock} />
    <Pattern path='/strict-still-life/beehive-on-table' lifeData={_beehive_on_table} />
    <Pattern path='/strict-still-life/beehive-with-bend-tail' lifeData={_beehive_with_bend_tail} />
    <Pattern path='/strict-still-life/beehive-with-nine' lifeData={_beehive_with_nine} />
    <Pattern path='/strict-still-life/beehive-with-tail' lifeData={_beehive_with_tail} />
    <Pattern path='/strict-still-life/beehive' lifeData={_beehive} />
    <Pattern path='/strict-still-life/bi-cap' lifeData={_bi_cap} />
    <Pattern path='/strict-still-life/bi-loaf2' lifeData={_bi_loaf2} />
    <Pattern path='/strict-still-life/bi-pond' lifeData={_bi_pond} />
    <Pattern path='/strict-still-life/big-s' lifeData={_big_s} />
    <Pattern path='/strict-still-life/block-on-cap' lifeData={_block_on_cap} />
    <Pattern path='/strict-still-life/block-on-cover' lifeData={_block_on_cover} />
    <Pattern path='/strict-still-life/block-on-dock' lifeData={_block_on_dock} />
    <Pattern path='/strict-still-life/block-on-table' lifeData={_block_on_table} />
    <Pattern path='/strict-still-life/block' lifeData={_block} />
    <Pattern path='/strict-still-life/boat-tie-eater-head' lifeData={_boat_tie_eater_head} />
    <Pattern path='/strict-still-life/boat-tie-eater-tail' lifeData={_boat_tie_eater_tail} />
    <Pattern path='/strict-still-life/boat-tie-long-boat' lifeData={_boat_tie_long_boat} />
    <Pattern path='/strict-still-life/boat-tie-long-snake' lifeData={_boat_tie_long_snake} />
    <Pattern path='/strict-still-life/boat-tie-ship' lifeData={_boat_tie_ship} />
    <Pattern path='/strict-still-life/boat-tie-snake' lifeData={_boat_tie_snake} />
    <Pattern path='/strict-still-life/boat-tie' lifeData={_boat_tie} />
    <Pattern path='/strict-still-life/boat-with-cis-tail' lifeData={_boat_with_cis_tail} />
    <Pattern path='/strict-still-life/boat-with-hooked-tail' lifeData={_boat_with_hooked_tail} />
    <Pattern path='/strict-still-life/boat-with-long-tail' lifeData={_boat_with_long_tail} />
    <Pattern path='/strict-still-life/boat-with-long3-tail' lifeData={_boat_with_long3_tail} />
    <Pattern path='/strict-still-life/boat-with-very-long-tail' lifeData={_boat_with_very_long_tail} />
    <Pattern path='/strict-still-life/boat' lifeData={_boat} />
    <Pattern path='/strict-still-life/bookend-table-snake' lifeData={_bookend_table_snake} />
    <Pattern path='/strict-still-life/bookends-siamese-tables' lifeData={_bookends_siamese_tables} />
    <Pattern path='/strict-still-life/bookends' lifeData={_bookends} />
    <Pattern path='/strict-still-life/broken-elevener' lifeData={_broken_elevener} />
    <Pattern path='/strict-still-life/broken-snake' lifeData={_broken_snake} />
    <Pattern path='/strict-still-life/canoe-siamese-snake' lifeData={_canoe_siamese_snake} />
    <Pattern path='/strict-still-life/canoe' lifeData={_canoe} />
    <Pattern path='/strict-still-life/cap-and-dock' lifeData={_cap_and_dock} />
    <Pattern path='/strict-still-life/carrier-bridge-carrier' lifeData={_carrier_bridge_carrier} />
    <Pattern path='/strict-still-life/carrier-bridge-snake' lifeData={_carrier_bridge_snake} />
    <Pattern path='/strict-still-life/carrier-bridge-table' lifeData={_carrier_bridge_table} />
    <Pattern path='/strict-still-life/carrier-siamese-canoe' lifeData={_carrier_siamese_canoe} />
    <Pattern path='/strict-still-life/carrier-siamese-carrier' lifeData={_carrier_siamese_carrier} />
    <Pattern path='/strict-still-life/carrier-siamese-dock' lifeData={_carrier_siamese_dock} />
    <Pattern path='/strict-still-life/carrier-siamese-eater-head' lifeData={_carrier_siamese_eater_head} />
    <Pattern path='/strict-still-life/carrier-siamese-eater-tail' lifeData={_carrier_siamese_eater_tail} />
    <Pattern path='/strict-still-life/carrier-siamese-hook-with-tail-hook' lifeData={_carrier_siamese_hook_with_tail_hook} />
    <Pattern path='/strict-still-life/carrier-siamese-hook-with-tail-tail' lifeData={_carrier_siamese_hook_with_tail_tail} />
    <Pattern path='/strict-still-life/carrier-siamese-long-snake' lifeData={_carrier_siamese_long_snake} />
    <Pattern path='/strict-still-life/carrier-siamese-shillelagh' lifeData={_carrier_siamese_shillelagh} />
    <Pattern path='/strict-still-life/carrier-siamese-tub-with-tail' lifeData={_carrier_siamese_tub_with_tail} />
    <Pattern path='/strict-still-life/carrier-siamese-very-long-snake' lifeData={_carrier_siamese_very_long_snake} />
    <Pattern path='/strict-still-life/carrier-tie-boat' lifeData={_carrier_tie_boat} />
    <Pattern path='/strict-still-life/carrier-tie-ship' lifeData={_carrier_tie_ship} />
    <Pattern path='/strict-still-life/carrier-with-feather' lifeData={_carrier_with_feather} />
    <Pattern path='/strict-still-life/cis-R-bee-and-R-loaf' lifeData={_cis_R_bee_and_R_loaf} />
    <Pattern path='/strict-still-life/cis-barge-with-nine' lifeData={_cis_barge_with_nine} />
    <Pattern path='/strict-still-life/cis-barge-with-tail' lifeData={_cis_barge_with_tail} />
    <Pattern path='/strict-still-life/cis-block-on-long-hook' lifeData={_cis_block_on_long_hook} />
    <Pattern path='/strict-still-life/cis-boat-amphisbaena' lifeData={_cis_boat_amphisbaena} />
    <Pattern path='/strict-still-life/cis-boat-and-cap' lifeData={_cis_boat_and_cap} />
    <Pattern path='/strict-still-life/cis-boat-line-tub' lifeData={_cis_boat_line_tub} />
    <Pattern path='/strict-still-life/cis-boat-on-dock' lifeData={_cis_boat_on_dock} />
    <Pattern path='/strict-still-life/cis-boat-on-table' lifeData={_cis_boat_on_table} />
    <Pattern path='/strict-still-life/cis-boat-with-nine' lifeData={_cis_boat_with_nine} />
    <Pattern path='/strict-still-life/cis-boat-with-tail' lifeData={_cis_boat_with_tail} />
    <Pattern path='/strict-still-life/cis-carrier-down-on-table' lifeData={_cis_carrier_down_on_table} />
    <Pattern path='/strict-still-life/cis-carrier-tie-snake' lifeData={_cis_carrier_tie_snake} />
    <Pattern path='/strict-still-life/cis-carrier-tie' lifeData={_cis_carrier_tie} />
    <Pattern path='/strict-still-life/cis-carrier-up-on-table' lifeData={_cis_carrier_up_on_table} />
    <Pattern path='/strict-still-life/cis-fuse-with-two-tails' lifeData={_cis_fuse_with_two_tails} />
    <Pattern path='/strict-still-life/cis-hook-and-R-bee' lifeData={_cis_hook_and_R_bee} />
    <Pattern path='/strict-still-life/cis-hook-with-tail' lifeData={_cis_hook_with_tail} />
    <Pattern path='/strict-still-life/cis-loaf-with-tail' lifeData={_cis_loaf_with_tail} />
    <Pattern path='/strict-still-life/cis-long-barge-with-tail' lifeData={_cis_long_barge_with_tail} />
    <Pattern path='/strict-still-life/cis-long-boat-with-tail' lifeData={_cis_long_boat_with_tail} />
    <Pattern path='/strict-still-life/cis-mango-with-tail' lifeData={_cis_mango_with_tail} />
    <Pattern path='/strict-still-life/cis-mirrored-R-bee' lifeData={_cis_mirrored_R_bee} />
    <Pattern path='/strict-still-life/cis-mirrored-worm-siamese-cis-mirrored-worm' lifeData={_cis_mirrored_worm_siamese_cis_mirrored_worm} />
    <Pattern path='/strict-still-life/cis-mirrored-worm' lifeData={_cis_mirrored_worm} />
    <Pattern path='/strict-still-life/cis-rotated-R-bee' lifeData={_cis_rotated_R_bee} />
    <Pattern path='/strict-still-life/cis-rotated-hook' lifeData={_cis_rotated_hook} />
    <Pattern path='/strict-still-life/cis-shillelagh' lifeData={_cis_shillelagh} />
    <Pattern path='/strict-still-life/cis-ship-on-table' lifeData={_cis_ship_on_table} />
    <Pattern path='/strict-still-life/cis-snake-tie' lifeData={_cis_snake_tie} />
    <Pattern path='/strict-still-life/claw-siamese-tub-with-cape' lifeData={_claw_siamese_tub_with_cape} />
    <Pattern path='/strict-still-life/claw-with-boat-with-tail' lifeData={_claw_with_boat_with_tail} />
    <Pattern path='/strict-still-life/claw-with-tail' lifeData={_claw_with_tail} />
    <Pattern path='/strict-still-life/claw-with-tub-with-tail' lifeData={_claw_with_tub_with_tail} />
    <Pattern path='/strict-still-life/clips' lifeData={_clips} />
    <Pattern path='/strict-still-life/cloverleaf-interchange' lifeData={_cloverleaf_interchange} />
    <Pattern path='/strict-still-life/cthulhu' lifeData={_cthulhu} />
    <Pattern path='/strict-still-life/dead-spark-coil' lifeData={_dead_spark_coil} />
    <Pattern path='/strict-still-life/dock-and-long-hook' lifeData={_dock_and_long_hook} />
    <Pattern path='/strict-still-life/double-claw' lifeData={_double_claw} />
    <Pattern path='/strict-still-life/down-snake-on-table' lifeData={_down_snake_on_table} />
    <Pattern path='/strict-still-life/eater-bridge-eater' lifeData={_eater_bridge_eater} />
    <Pattern path='/strict-still-life/eater-head-siamese-eater-head' lifeData={_eater_head_siamese_eater_head} />
    <Pattern path='/strict-still-life/eater-head-siamese-eater-tail' lifeData={_eater_head_siamese_eater_tail} />
    <Pattern path='/strict-still-life/eater-head-siamese-long-snake' lifeData={_eater_head_siamese_long_snake} />
    <Pattern path='/strict-still-life/eater-head-siamese-snake' lifeData={_eater_head_siamese_snake} />
    <Pattern path='/strict-still-life/eater-tail-siamese-eater-tail' lifeData={_eater_tail_siamese_eater_tail} />
    <Pattern path='/strict-still-life/eater-tail-siamese-long-snake' lifeData={_eater_tail_siamese_long_snake} />
    <Pattern path='/strict-still-life/eater-tail-siamese-snake' lifeData={_eater_tail_siamese_snake} />
    <Pattern path='/strict-still-life/eater-with-cape' lifeData={_eater_with_cape} />
    <Pattern path='/strict-still-life/eater-with-head-feather' lifeData={_eater_with_head_feather} />
    <Pattern path='/strict-still-life/eater-with-tail-feather' lifeData={_eater_with_tail_feather} />
    <Pattern path='/strict-still-life/egyptian-walk' lifeData={_egyptian_walk} />
    <Pattern path='/strict-still-life/eleven-loop' lifeData={_eleven_loop} />
    <Pattern path='/strict-still-life/elevener' lifeData={_elevener} />
    <Pattern path='/strict-still-life/fourteener' lifeData={_fourteener} />
    <Pattern path='/strict-still-life/fuse-with-tail-and-integral' lifeData={_fuse_with_tail_and_integral} />
    <Pattern path='/strict-still-life/fuse-with-tail-and-long-tail' lifeData={_fuse_with_tail_and_long_tail} />
    <Pattern path='/strict-still-life/fuse-with-tail-and-very-long-tail' lifeData={_fuse_with_tail_and_very_long_tail} />
    <Pattern path='/strict-still-life/fuse-with-two-long-tails' lifeData={_fuse_with_two_long_tails} />
    <Pattern path='/strict-still-life/grin-reagent' lifeData={_grin_reagent} />
    <Pattern path='/strict-still-life/gull-with-tub' lifeData={_gull_with_tub} />
    <Pattern path='/strict-still-life/half-bakery' lifeData={_half_bakery} />
    <Pattern path='/strict-still-life/hat-siamese-vase' lifeData={_hat_siamese_vase} />
    <Pattern path='/strict-still-life/hat' lifeData={_hat} />
    <Pattern path='/strict-still-life/hexagonal-key' lifeData={_hexagonal_key} />
    <Pattern path='/strict-still-life/honeybarge' lifeData={_honeybarge} />
    <Pattern path='/strict-still-life/honeycomb' lifeData={_honeycomb} />
    <Pattern path='/strict-still-life/hook-with-nine' lifeData={_hook_with_nine} />
    <Pattern path='/strict-still-life/hook-with-tail-hook-siamese-snake' lifeData={_hook_with_tail_hook_siamese_snake} />
    <Pattern path='/strict-still-life/hook-with-tail-tail-siamese-snake' lifeData={_hook_with_tail_tail_siamese_snake} />
    <Pattern path='/strict-still-life/hook-with-tail-with-cape' lifeData={_hook_with_tail_with_cape} />
    <Pattern path='/strict-still-life/hook-with-tail' lifeData={_hook_with_tail} />
    <Pattern path='/strict-still-life/hook-with-two-tails' lifeData={_hook_with_two_tails} />
    <Pattern path='/strict-still-life/house-on-house-siamese-table-on-table-weld-hat-siamese-hat' lifeData={_house_on_house_siamese_table_on_table_weld_hat_siamese_hat} />
    <Pattern path='/strict-still-life/hungry-hat' lifeData={_hungry_hat} />
    <Pattern path='/strict-still-life/inflected-clips' lifeData={_inflected_clips} />
    <Pattern path='/strict-still-life/inflected-long-snake' lifeData={_inflected_long_snake} />
    <Pattern path='/strict-still-life/inflexion' lifeData={_inflexion} />
    <Pattern path='/strict-still-life/integral-sign' lifeData={_integral_sign} />
    <Pattern path='/strict-still-life/integral-with-cis-hook' lifeData={_integral_with_cis_hook} />
    <Pattern path='/strict-still-life/integral-with-hook-and-tail' lifeData={_integral_with_hook_and_tail} />
    <Pattern path='/strict-still-life/integral-with-hook' lifeData={_integral_with_hook} />
    <Pattern path='/strict-still-life/integral-with-long-hook-and-tub' lifeData={_integral_with_long_hook_and_tub} />
    <Pattern path='/strict-still-life/integral-with-long-hook' lifeData={_integral_with_long_hook} />
    <Pattern path='/strict-still-life/integral-with-tub-and-hook' lifeData={_integral_with_tub_and_hook} />
    <Pattern path='/strict-still-life/integral-with-tub-and-tail' lifeData={_integral_with_tub_and_tail} />
    <Pattern path='/strict-still-life/integral-with-tub' lifeData={_integral_with_tub} />
    <Pattern path='/strict-still-life/integral-with-two-tubs' lifeData={_integral_with_two_tubs} />
    <Pattern path='/strict-still-life/integral-with-very-long-hook' lifeData={_integral_with_very_long_hook} />
    <Pattern path='/strict-still-life/inverted-double-claw' lifeData={_inverted_double_claw} />
    <Pattern path='/strict-still-life/lake2' lifeData={_lake2} />
    <Pattern path='/strict-still-life/loaf-back-tie-loaf' lifeData={_loaf_back_tie_loaf} />
    <Pattern path='/strict-still-life/loaf-siamese-loaf' lifeData={_loaf_siamese_loaf} />
    <Pattern path='/strict-still-life/loaf-tie-eater-with-tail' lifeData={_loaf_tie_eater_with_tail} />
    <Pattern path='/strict-still-life/loaf' lifeData={_loaf} />
    <Pattern path='/strict-still-life/long-barge' lifeData={_long_barge} />
    <Pattern path='/strict-still-life/long-boat-tie-ship' lifeData={_long_boat_tie_ship} />
    <Pattern path='/strict-still-life/long-boat-with-long-tail' lifeData={_long_boat_with_long_tail} />
    <Pattern path='/strict-still-life/long-boat' lifeData={_long_boat} />
    <Pattern path='/strict-still-life/long-canoe' lifeData={_long_canoe} />
    <Pattern path='/strict-still-life/long-cis-hook-with-tail' lifeData={_long_cis_hook_with_tail} />
    <Pattern path='/strict-still-life/long-cis-shillelagh' lifeData={_long_cis_shillelagh} />
    <Pattern path='/strict-still-life/long-claw-with-tail' lifeData={_long_claw_with_tail} />
    <Pattern path='/strict-still-life/long-hook-with-tail' lifeData={_long_hook_with_tail} />
    <Pattern path='/strict-still-life/long-integral-with-boat' lifeData={_long_integral_with_boat} />
    <Pattern path='/strict-still-life/long-integral' lifeData={_long_integral} />
    <Pattern path='/strict-still-life/long-melusine' lifeData={_long_melusine} />
    <Pattern path='/strict-still-life/long-prodigal' lifeData={_long_prodigal} />
    <Pattern path='/strict-still-life/long-shillelagh' lifeData={_long_shillelagh} />
    <Pattern path='/strict-still-life/long-ship' lifeData={_long_ship} />
    <Pattern path='/strict-still-life/long-snake-siamese-long-snake' lifeData={_long_snake_siamese_long_snake} />
    <Pattern path='/strict-still-life/long-snake' lifeData={_long_snake} />
    <Pattern path='/strict-still-life/long-tub-claw-with-tail' lifeData={_long_tub_claw_with_tail} />
    <Pattern path='/strict-still-life/long10-boat' lifeData={_long10_boat} />
    <Pattern path='/strict-still-life/long10-ship' lifeData={_long10_ship} />
    <Pattern path='/strict-still-life/long3-barge' lifeData={_long3_barge} />
    <Pattern path='/strict-still-life/long3-boat' lifeData={_long3_boat} />
    <Pattern path='/strict-still-life/long3-canoe' lifeData={_long3_canoe} />
    <Pattern path='/strict-still-life/long3-hook-with-tail' lifeData={_long3_hook_with_tail} />
    <Pattern path='/strict-still-life/long3-integral' lifeData={_long3_integral} />
    <Pattern path='/strict-still-life/long3-shillelagh' lifeData={_long3_shillelagh} />
    <Pattern path='/strict-still-life/long3-ship' lifeData={_long3_ship} />
    <Pattern path='/strict-still-life/long3-snake' lifeData={_long3_snake} />
    <Pattern path='/strict-still-life/long4-barge' lifeData={_long4_barge} />
    <Pattern path='/strict-still-life/long4-boat' lifeData={_long4_boat} />
    <Pattern path='/strict-still-life/long4-canoe' lifeData={_long4_canoe} />
    <Pattern path='/strict-still-life/long4-hook-with-tail' lifeData={_long4_hook_with_tail} />
    <Pattern path='/strict-still-life/long4-shillelagh' lifeData={_long4_shillelagh} />
    <Pattern path='/strict-still-life/long4-ship' lifeData={_long4_ship} />
    <Pattern path='/strict-still-life/long4-snake' lifeData={_long4_snake} />
    <Pattern path='/strict-still-life/long5-barge' lifeData={_long5_barge} />
    <Pattern path='/strict-still-life/long5-boat' lifeData={_long5_boat} />
    <Pattern path='/strict-still-life/long5-ship' lifeData={_long5_ship} />
    <Pattern path='/strict-still-life/long5-snake' lifeData={_long5_snake} />
    <Pattern path='/strict-still-life/long6-barge' lifeData={_long6_barge} />
    <Pattern path='/strict-still-life/long6-boat' lifeData={_long6_boat} />
    <Pattern path='/strict-still-life/long6-ship' lifeData={_long6_ship} />
    <Pattern path='/strict-still-life/long6-snake' lifeData={_long6_snake} />
    <Pattern path='/strict-still-life/long7-boat' lifeData={_long7_boat} />
    <Pattern path='/strict-still-life/long7-ship' lifeData={_long7_ship} />
    <Pattern path='/strict-still-life/long8-boat' lifeData={_long8_boat} />
    <Pattern path='/strict-still-life/long8-ship' lifeData={_long8_ship} />
    <Pattern path='/strict-still-life/long9-boat' lifeData={_long9_boat} />
    <Pattern path='/strict-still-life/long9-ship' lifeData={_long9_ship} />
    <Pattern path='/strict-still-life/longhorn' lifeData={_longhorn} />
    <Pattern path='/strict-still-life/loop' lifeData={_loop} />
    <Pattern path='/strict-still-life/mango-with-block-on-dock' lifeData={_mango_with_block_on_dock} />
    <Pattern path='/strict-still-life/mango' lifeData={_mango} />
    <Pattern path='/strict-still-life/mickey-mouse' lifeData={_mickey_mouse} />
    <Pattern path='/strict-still-life/mirrored-dock' lifeData={_mirrored_dock} />
    <Pattern path='/strict-still-life/moose-antlers' lifeData={_moose_antlers} />
    <Pattern path='/strict-still-life/o-quad-loaf' lifeData={_o_quad_loaf} />
    <Pattern path='/strict-still-life/omnibus-with-tubs' lifeData={_omnibus_with_tubs} />
    <Pattern path='/strict-still-life/omnibus' lifeData={_omnibus} />
    <Pattern path='/strict-still-life/ortho-loaf-on-table' lifeData={_ortho_loaf_on_table} />
    <Pattern path='/strict-still-life/paperclip' lifeData={_paperclip} />
    <Pattern path='/strict-still-life/pond-on-dock' lifeData={_pond_on_dock} />
    <Pattern path='/strict-still-life/pond' lifeData={_pond} />
    <Pattern path='/strict-still-life/professor' lifeData={_professor} />
    <Pattern path='/strict-still-life/python-siamese-snake' lifeData={_python_siamese_snake} />
    <Pattern path='/strict-still-life/rotated-c' lifeData={_rotated_c} />
    <Pattern path='/strict-still-life/rotated-table' lifeData={_rotated_table} />
    <Pattern path='/strict-still-life/scorpion' lifeData={_scorpion} />
    <Pattern path='/strict-still-life/sesquihat' lifeData={_sesquihat} />
    <Pattern path='/strict-still-life/shillelagh-siamese-snake' lifeData={_shillelagh_siamese_snake} />
    <Pattern path='/strict-still-life/shillelagh' lifeData={_shillelagh} />
    <Pattern path='/strict-still-life/ship-tie-snake' lifeData={_ship_tie_snake} />
    <Pattern path='/strict-still-life/ship-tie' lifeData={_ship_tie} />
    <Pattern path='/strict-still-life/ship' lifeData={_ship} />
    <Pattern path='/strict-still-life/shuriken' lifeData={_shuriken} />
    <Pattern path='/strict-still-life/sidewalk' lifeData={_sidewalk} />
    <Pattern path='/strict-still-life/skew-R-bees' lifeData={_skew_R_bees} />
    <Pattern path='/strict-still-life/small-lake' lifeData={_small_lake} />
    <Pattern path='/strict-still-life/snake-bridge-snake' lifeData={_snake_bridge_snake} />
    <Pattern path='/strict-still-life/snake-siamese-snake' lifeData={_snake_siamese_snake} />
    <Pattern path='/strict-still-life/snake-siamese-very-long-snake' lifeData={_snake_siamese_very_long_snake} />
    <Pattern path='/strict-still-life/snake-with-feather' lifeData={_snake_with_feather} />
    <Pattern path='/strict-still-life/snake' lifeData={_snake} />
    <Pattern path='/strict-still-life/snorkel-loop' lifeData={_snorkel_loop} />
    <Pattern path='/strict-still-life/spiral' lifeData={_spiral} />
    <Pattern path='/strict-still-life/super-loaf' lifeData={_super_loaf} />
    <Pattern path='/strict-still-life/super-mango' lifeData={_super_mango} />
    <Pattern path='/strict-still-life/super-pond' lifeData={_super_pond} />
    <Pattern path='/strict-still-life/symmetric-scorpion' lifeData={_symmetric_scorpion} />
    <Pattern path='/strict-still-life/symmetrical-synapse' lifeData={_symmetrical_synapse} />
    <Pattern path='/strict-still-life/table-and-dock' lifeData={_table_and_dock} />
    <Pattern path='/strict-still-life/table-and-table' lifeData={_table_and_table} />
    <Pattern path='/strict-still-life/teardrop-with-cape' lifeData={_teardrop_with_cape} />
    <Pattern path='/strict-still-life/teardrop-with-claw' lifeData={_teardrop_with_claw} />
    <Pattern path='/strict-still-life/thirteen-loop' lifeData={_thirteen_loop} />
    <Pattern path='/strict-still-life/trans-R-bee-and-R-loaf' lifeData={_trans_R_bee_and_R_loaf} />
    <Pattern path='/strict-still-life/trans-barge-with-nine' lifeData={_trans_barge_with_nine} />
    <Pattern path='/strict-still-life/trans-barge-with-tail' lifeData={_trans_barge_with_tail} />
    <Pattern path='/strict-still-life/trans-block-on-long-hook' lifeData={_trans_block_on_long_hook} />
    <Pattern path='/strict-still-life/trans-boat-amphisbaena' lifeData={_trans_boat_amphisbaena} />
    <Pattern path='/strict-still-life/trans-boat-line-tub' lifeData={_trans_boat_line_tub} />
    <Pattern path='/strict-still-life/trans-boat-on-dock' lifeData={_trans_boat_on_dock} />
    <Pattern path='/strict-still-life/trans-boat-on-table' lifeData={_trans_boat_on_table} />
    <Pattern path='/strict-still-life/trans-boat-with-nine' lifeData={_trans_boat_with_nine} />
    <Pattern path='/strict-still-life/trans-boat-with-tail' lifeData={_trans_boat_with_tail} />
    <Pattern path='/strict-still-life/trans-carrier-down-on-table' lifeData={_trans_carrier_down_on_table} />
    <Pattern path='/strict-still-life/trans-carrier-tie-snake' lifeData={_trans_carrier_tie_snake} />
    <Pattern path='/strict-still-life/trans-carrier-tie' lifeData={_trans_carrier_tie} />
    <Pattern path='/strict-still-life/trans-carrier-up-on-table' lifeData={_trans_carrier_up_on_table} />
    <Pattern path='/strict-still-life/trans-fuse-with-two-tails' lifeData={_trans_fuse_with_two_tails} />
    <Pattern path='/strict-still-life/trans-hook-and-R-bee' lifeData={_trans_hook_and_R_bee} />
    <Pattern path='/strict-still-life/trans-loaf-with-tail' lifeData={_trans_loaf_with_tail} />
    <Pattern path='/strict-still-life/trans-long-barge-with-tail' lifeData={_trans_long_barge_with_tail} />
    <Pattern path='/strict-still-life/trans-long-boat-with-tail' lifeData={_trans_long_boat_with_tail} />
    <Pattern path='/strict-still-life/trans-mango-with-tail' lifeData={_trans_mango_with_tail} />
    <Pattern path='/strict-still-life/trans-mirrored-R-bee' lifeData={_trans_mirrored_R_bee} />
    <Pattern path='/strict-still-life/trans-rotated-R-bee' lifeData={_trans_rotated_R_bee} />
    <Pattern path='/strict-still-life/trans-ship-on-table' lifeData={_trans_ship_on_table} />
    <Pattern path='/strict-still-life/trans-snake-tie' lifeData={_trans_snake_tie} />
    <Pattern path='/strict-still-life/tub-bend-line-tub' lifeData={_tub_bend_line_tub} />
    <Pattern path='/strict-still-life/tub-with-cis-tail' lifeData={_tub_with_cis_tail} />
    <Pattern path='/strict-still-life/tub-with-long-cis-tail' lifeData={_tub_with_long_cis_tail} />
    <Pattern path='/strict-still-life/tub-with-long-tail' lifeData={_tub_with_long_tail} />
    <Pattern path='/strict-still-life/tub-with-long3-tail' lifeData={_tub_with_long3_tail} />
    <Pattern path='/strict-still-life/tub-with-long4-tail' lifeData={_tub_with_long4_tail} />
    <Pattern path='/strict-still-life/tub-with-tail-siamese-snake' lifeData={_tub_with_tail_siamese_snake} />
    <Pattern path='/strict-still-life/tub-with-tail-with-cape' lifeData={_tub_with_tail_with_cape} />
    <Pattern path='/strict-still-life/tub-with-tail' lifeData={_tub_with_tail} />
    <Pattern path='/strict-still-life/tub-with-two-down-cis-tails' lifeData={_tub_with_two_down_cis_tails} />
    <Pattern path='/strict-still-life/tub-with-two-down-trans-tails' lifeData={_tub_with_two_down_trans_tails} />
    <Pattern path='/strict-still-life/tub-with-two-up-cis-tails' lifeData={_tub_with_two_up_cis_tails} />
    <Pattern path='/strict-still-life/tub-with-two-up-trans-tails' lifeData={_tub_with_two_up_trans_tails} />
    <Pattern path='/strict-still-life/tub-with-very-long-tail' lifeData={_tub_with_very_long_tail} />
    <Pattern path='/strict-still-life/tub' lifeData={_tub} />
    <Pattern path='/strict-still-life/twelve-loop' lifeData={_twelve_loop} />
    <Pattern path='/strict-still-life/twin-hat' lifeData={_twin_hat} />
    <Pattern path='/strict-still-life/up-dove-on-dove' lifeData={_up_dove_on_dove} />
    <Pattern path='/strict-still-life/up-snake-on-table' lifeData={_up_snake_on_table} />
    <Pattern path='/strict-still-life/up-wing-on-wing' lifeData={_up_wing_on_wing} />
    <Pattern path='/strict-still-life/very-long-barge' lifeData={_very_long_barge} />
    <Pattern path='/strict-still-life/very-long-boat' lifeData={_very_long_boat} />
    <Pattern path='/strict-still-life/very-long-canoe' lifeData={_very_long_canoe} />
    <Pattern path='/strict-still-life/very-long-cis-hook-with-tail' lifeData={_very_long_cis_hook_with_tail} />
    <Pattern path='/strict-still-life/very-long-cis-shillelagh' lifeData={_very_long_cis_shillelagh} />
    <Pattern path='/strict-still-life/very-long-claw-with-tail' lifeData={_very_long_claw_with_tail} />
    <Pattern path='/strict-still-life/very-long-hook-with-tail' lifeData={_very_long_hook_with_tail} />
    <Pattern path='/strict-still-life/very-long-integral' lifeData={_very_long_integral} />
    <Pattern path='/strict-still-life/very-long-melusine' lifeData={_very_long_melusine} />
    <Pattern path='/strict-still-life/very-long-prodigal' lifeData={_very_long_prodigal} />
    <Pattern path='/strict-still-life/very-long-shillelagh' lifeData={_very_long_shillelagh} />
    <Pattern path='/strict-still-life/very-long-ship' lifeData={_very_long_ship} />
    <Pattern path='/strict-still-life/very-long-snake' lifeData={_very_long_snake} />
    <Pattern path='/strict-still-life/z-quad-loaf' lifeData={_z_quad_loaf} />
  </Router>
), document.getElementById('app'));
