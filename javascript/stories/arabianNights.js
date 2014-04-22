var storyNS = storyNS || {};

storyNS.FIRST_NODE = 1; // Change this to choose initial node.

storyNS.TITLE = "";

storyNS.storyNodes = {
    1: {
           text: function() {
                     return ["Your name is Badr, son of a poor tailor in the city of Baghdad during the rule of the caliph, Harun al'Rashid. Young, poor, and without a mother, you spend your days wandering the streets, looking for amusement and occasionally trouble.",
                     "One day, while in a corner of the city you had never visited before, you notice a glimmer of light shining through a crack in the wall along the street. Curious, you approach and peer through. You view a beautiful courtyard with white walls, citrus trees, a sparkling fountain, and trimmed grass. Sitting on the edge of the fountain, watching the birds dart around, you see a beautiful woman, with soft eyes, kind face, and graceful figure.",
                     "To your suprise, you find yourself feeling weak. Never have you seen such a beautiful sight. In the streets of Baghdad, the women's veils had prevented you from ever witnessing such beauty. With a sinking heart you realize that you have fallen hopelessly in love with this mysterious woman.",
                     "Looking up now from the crack, you look up and down the wall and for the first time notice its ornate carvings, gold trim, and superb craftmanship. You realize that you are outside none other than the Caliph's royal palace and that the woman you spied is the royal princess, Jullanare.",
                     "A depression washes over you as you realize that you will never be able to win this princess, a woman of such noble birth. Walking home dejectedly you find that you cannot push her out of your mind. You realize that you are never going to be happy again unless you can win and marry the princess."];
                 },
           links: {
                      a: {
                             link: 8,
                             linkText: "As the son of a poor craftsman, you recognize that you are not fit to marry a princess, and you decide to amass the wealth and esteem you'll need to ask her father for her hand in marriage."
                         },
                      b: {
                             link: 4,
                             linkText: "You decide to kidnap the princess."
                         },
                      c: {
                             link: 3,
                             linkText: "You realize that your obsession will lead to nothing but trouble and you accept that you were not born to marry such an extraordinary woman."
                         }
                  }
       },
    2: {
           text: function() {
                     return ["As a result of your actions, you die."];
                 },
           links: {}
       },
    3: {
           text: function() {
                     return ["Resigned to your sorry fate, you return home where you spend a restless night. The next day, you find that the taste of food no longer pleases you and you eat nothing. That night, you lay awake hungry and miserable, unable to sleep. You continue this way, living without sleep, without food. Eventually, you waste away and die of a broken heart."];
                 },
           links: {}
       },

    4: {
           text: function() {
                     return ["You resolve to kidnap the princess. Although you realize your actions may frighten her, you are sure that you will quickly allay her fears. You have no doubt that she will fall for you when she recognizes your passion for her.",
                     "You realize that you will likely have but one opportunity to execute a kidnapping so you decide to carefully devise a plan. The next day, you set out early in the morning to the palace to see if you can gather any information that will help you put together a foolproof operation. To avoid suspicion, you disguise yourself as a hunchback by placing a bag of rice over your shoulders beneath your robe. You smear mud on your face and walk with a limp to complete the disguise.",
                     "When you arrive at the palace you walk around the entire complex. The walls are so tall that you cannot see beyond them, but high above you can make out the polished domes of the buildings within. An ornate gate of beaten copper, studded with semi-precious stones, is set within one of the walls. Beside it, two guards stand talking.",
                     "Suddenly, a trumpet sounds and the gates open, revealing a procession of slaves bearing a curtained carriage. The procession moves slowly away from the palace and down the road. The sound of the trumpet attracts the attention of a crowd of bystanders who stand alongside the road to watch the carriage move past. A young man steps up to the carriage and tries to pull back the curtain. The guards at the gate see him and rush to restrain him as the carriage continues to move away. The first guard holds the young man to the ground and the second pulls out a knotted whip. As you watch the scene unfold, you notice that the gate to the palace is still ajar."
                         ];},
           links:{
               a: {
                      link: 2,
                      linkText: "Take advantage of the opportunity and sneak into the palace."
                  },
               b: {
                      link: 6,
                      linkText: "Follow the procession. Perhaps the princess is within the carriage."
                  },
               c: {
                      link: 5,
                      linkText: "Rush to the young man's aid."
                  }
           }

       },

    5: {
           text: function() {
                     storyNS.HAS_RING = true;
                     return ["The guard raises the whip ready to strike. Alarmed at the young man's peril, you rush out and throw yourself on top of him to shield him from the blow. You clench your eyes expecting to feel the pain of the whip's lash on your back when, to your amazement, you feel nothing.",
                            "The guard laughs and puts down the whip, saying,",
                            "",
                            '"Boy, you are lucky this hunchback is here to protect you. I\'m not going to hit a cripple. Get out of here and don\'t wander into my sight again."',
                            "",
                            "The guards walk back to their post by the palace gate. You get up off of the man and and stumble down a side street. The man follows you.",
                            "",
                            '"Thank you", he says, "You saved my life. At the very least, take this as a token of my appreciation."',
                            "",
                            "The young man pulls a seal ring off of his finger and drops it into your hand. The ring is black, cold to the touch, and strangely heavy. You look up questioningly.",
                            "",
                            '"That ring will protect you when you need it most," he explains, "It was given to me by my mother, a powerful sorceress."',
                            "",
                            "You look at the ring skeptically, but thank the man who then turns around and disappears down the street. Looking back at the palace, you see that the gate is now closed. You turn and hurry after the procession."];
                 },
           links: {
                      a: {
                             link: 6,
                             linkText: "Continue"
                         }
                  }
       },
    6: {
           text: function() {
                     return ["You follow the procession down the road and through the winding streets of Baghdad until it reaches the outskirts of the city. Eventually, you reach the city limits and continue into the barren hills. You travel half a mile behind them to avoid detection. At one point, you lose sight of the procession as it passes over a hill. When you reach the crest of the hill, you find that the carriage, along with the slaves carrying it, has vanished.",
                     "Suprised, you hurry down the hill, looking around for any trace of the procession. All you find is barren, flat empty land. You trace their footsteps in the dirt until you reach a wide, flat area where the footsteps suddenly stop.",
                     "After careful examination, you realize that concealed at your feet lies a carpet covered in soil. Lifting the carpet, you see that it had hidden an old, wooden trap door."
                         ];
                 },
           links: {
                      a: {
                             link: 2,
                             linkText: "Wait a small distance away form the trapdoor to see if anyone enters or leaves."
                         },
                      b: {
                             link: 7,
                             linkText: "Open the trapdoor to see what is beneath."
                         },
                  }
       },

    7: {
           text: function() {
                     return ["You grab the iron ring set into the trapdoor and heave it open. Beneath, you find a descending staircase of stone steps. "];
                 },
           links: {
                  }
       },

    8: {
           text: function() {
                    return ["You decide to try your luck as a merchant. You borrow a small sum of money from your father and buy an assortment of local goods you feel will bring high prices in distant lands. When you are properly provisioned, you join a group of merchants aboard a vessel headed to Basra.",
                   "The ship sails for seven days and seven nights, stopping at various islands along the way. At each stop you trade some of your goods with the locals and slowly, you begin to increase the value of your merchandise.",
                  "On the seventh night, however, a terrible storm picks up. The captain, tearing his beard, exclaims,",
                 "",
                 '"We\'re lost! Our ship is caught in the dreaded Sargasso!"',
                 "",
                 "Sure enough, the ocean appears to sink underneath itself in a swirling whirlpool. The ship teeters on the edge of this chasm and then tips into a sea-foamed grave. The crew clings on to the masts and rails to no avail, the walls of water smash against the ship, tearing plank, sail, and rope like a scythe through straw. The last thing you remember are the waves closing overhead."
                     ];

                 },
           links: {
                      a: {
                            link: 9,
                            linkText: "Continue"
                         }
                  },
       },
    9: {
           text: function() {
                     return ["You wake up on a sandy beach, eyes sore from the salt. Looking around, you realize that you have been washed ashore a small island. You walk beyond the edge of the beach into the island's jungle where you find a clear spring surrounded by trees bearing large, red fruit.", "You do not recognize the oval fruits, but they look ripe and juicy. Your stomach gurgles as you realize you're famished. The fruit are just out of reach and the tree trunks rise from the earth, smooth and tall, before branching out high above. You wonder how you are going to get the fruit when you notice a neatly coiled rope at the base of the nearest tree."];

                 },
           links: {
                      a: {
                            link: 10,
                            linkText: "Use the rope to climb the tree to harvest the fruit."
                         },
                      b: {
                            link: 11,
                            linkText: "Leave the fruit and search for a way off the island."
                         }
                  }
       },
    10: {
            text: function() {
                return ["You grasp the rope. It feels strangely smooth. Before you get the chance to fling it over a tree branch, the rope whips around and bites you in the neck. Paralyzed, you sink to the ground. As the world fades around you, you can faintly make out the black rope slithering away. You never liked snakes." ];
                  },
            links: {}
        },
    11: {
            text: function() {
                return ["You walk around the circumference of the island, finding nothing. You trudge through the overgrown forest without luck either. Dismayed, you return to the shore where, exhausted, you sit down and ponder your fate.",
                "Suddenly, you notice a speck in the distance. A ship!"];
                  },
            links: {
                       a: {
                              link: 12,
                              linkText: "Jump into the ocean and swim towards the ship."
                          },
                       b: {
                              link: 13,
                              linkText: "Gather driftwood and build a signal fire."
                          }
                   }
    },

    12: {
        text: function() {
            return ["You dive into the sea. Arms paddling furiously in the direction of the ship"];
              },
        links: {}

        },
    13: {
        text: function() {
            return ["You scramble about the beach grabbing driftwood and brush from the edge of the forest. Frantically, you build up a pile of wood to light on fire."];
              },
        links: {}

        }

};
