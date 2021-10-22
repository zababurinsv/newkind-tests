let $1b18bf45954afeed$var$has = Object.prototype.hasOwnProperty;
let $1b18bf45954afeed$var$toString = Object.prototype.toString;
function $1b18bf45954afeed$var$isEmpty(val) {
    // Null and Undefined...
    if (val == null) return true;
    // Booleans...
    if ('boolean' == typeof val) return false;
    // Numbers...
    if ('number' == typeof val) return val === 0;
    // Strings...
    if ('string' == typeof val) return val.length === 0;
    // Functions...
    if ('function' == typeof val) return val.length === 0;
    // Arrays...
    if (Array.isArray(val)) {
        let object = val instanceof Object;
        if (object) return Object.keys(val).length === 0;
        else return val.length === 0;
    }
    // Errors...
    if (val instanceof Error) return val.message === '';
    // Objects...
    if (val.toString == $1b18bf45954afeed$var$toString) switch(val.toString()){
        // Maps, Sets, Files and Errors...
        case '[object File]':
        case '[object Map]':
        case '[object Set]':
            return val.size === 0;
        // Plain objects...
        case '[object Object]':
            for(var key in val){
                if ($1b18bf45954afeed$var$has.call(val, key)) return false;
            }
            return true;
    }
    // Anything else...
    return false;
}
var $1b18bf45954afeed$export$9099ad97b570f7c = $1b18bf45954afeed$var$isEmpty;


const $dfe731a04a9a6860$var$emojiMap = [
    {
        emoji: '💯',
        name: '100'
    },
    {
        emoji: '🔢',
        name: '1234'
    },
    {
        emoji: '😀',
        name: 'grinning'
    },
    {
        emoji: '😬',
        name: 'grimacing'
    },
    {
        emoji: '😁',
        name: 'grin'
    },
    {
        emoji: '😂',
        name: 'joy'
    },
    {
        emoji: '🤣',
        name: 'rofl'
    },
    {
        emoji: '😃',
        name: 'smiley'
    },
    {
        emoji: '😄',
        name: 'smile'
    },
    {
        emoji: '😅',
        name: 'sweat_smile'
    },
    {
        emoji: '😆',
        name: 'laughing'
    },
    {
        emoji: '😇',
        name: 'innocent'
    },
    {
        emoji: '😉',
        name: 'wink'
    },
    {
        emoji: '😊',
        name: 'blush'
    },
    {
        emoji: '🙂',
        name: 'slightly_smiling_face'
    },
    {
        emoji: '🙃',
        name: 'upside_down_face'
    },
    {
        emoji: '☺️',
        name: 'relaxed'
    },
    {
        emoji: '😋',
        name: 'yum'
    },
    {
        emoji: '😌',
        name: 'relieved'
    },
    {
        emoji: '😍',
        name: 'heart_eyes'
    },
    {
        emoji: '😘',
        name: 'kissing_heart'
    },
    {
        emoji: '😗',
        name: 'kissing'
    },
    {
        emoji: '😙',
        name: 'kissing_smiling_eyes'
    },
    {
        emoji: '😚',
        name: 'kissing_closed_eyes'
    },
    {
        emoji: '😜',
        name: 'stuck_out_tongue_winking_eye'
    },
    {
        emoji: '😝',
        name: 'stuck_out_tongue_closed_eyes'
    },
    {
        emoji: '😛',
        name: 'stuck_out_tongue'
    },
    {
        emoji: '🤑',
        name: 'money_mouth_face'
    },
    {
        emoji: '🤓',
        name: 'nerd_face'
    },
    {
        emoji: '😎',
        name: 'sunglasses'
    },
    {
        emoji: '🤡',
        name: 'clown_face'
    },
    {
        emoji: '🤠',
        name: 'cowboy_hat_face'
    },
    {
        emoji: '🤗',
        name: 'hugs'
    },
    {
        emoji: '😏',
        name: 'smirk'
    },
    {
        emoji: '😶',
        name: 'no_mouth'
    },
    {
        emoji: '😐',
        name: 'neutral_face'
    },
    {
        emoji: '😑',
        name: 'expressionless'
    },
    {
        emoji: '😒',
        name: 'unamused'
    },
    {
        emoji: '🙄',
        name: 'roll_eyes'
    },
    {
        emoji: '🤔',
        name: 'thinking'
    },
    {
        emoji: '🤥',
        name: 'lying_face'
    },
    {
        emoji: '😳',
        name: 'flushed'
    },
    {
        emoji: '😞',
        name: 'disappointed'
    },
    {
        emoji: '😟',
        name: 'worried'
    },
    {
        emoji: '😠',
        name: 'angry'
    },
    {
        emoji: '😡',
        name: 'rage'
    },
    {
        emoji: '😔',
        name: 'pensive'
    },
    {
        emoji: '😕',
        name: 'confused'
    },
    {
        emoji: '🙁',
        name: 'slightly_frowning_face'
    },
    {
        emoji: '☹',
        name: 'frowning_face'
    },
    {
        emoji: '😣',
        name: 'persevere'
    },
    {
        emoji: '😖',
        name: 'confounded'
    },
    {
        emoji: '😫',
        name: 'tired_face'
    },
    {
        emoji: '😩',
        name: 'weary'
    },
    {
        emoji: '😤',
        name: 'triumph'
    },
    {
        emoji: '😮',
        name: 'open_mouth'
    },
    {
        emoji: '😱',
        name: 'scream'
    },
    {
        emoji: '😨',
        name: 'fearful'
    },
    {
        emoji: '😰',
        name: 'cold_sweat'
    },
    {
        emoji: '😯',
        name: 'hushed'
    },
    {
        emoji: '😦',
        name: 'frowning'
    },
    {
        emoji: '😧',
        name: 'anguished'
    },
    {
        emoji: '😢',
        name: 'cry'
    },
    {
        emoji: '😥',
        name: 'disappointed_relieved'
    },
    {
        emoji: '🤤',
        name: 'drooling_face'
    },
    {
        emoji: '😪',
        name: 'sleepy'
    },
    {
        emoji: '😓',
        name: 'sweat'
    },
    {
        emoji: '😭',
        name: 'sob'
    },
    {
        emoji: '😵',
        name: 'dizzy_face'
    },
    {
        emoji: '😲',
        name: 'astonished'
    },
    {
        emoji: '🤐',
        name: 'zipper_mouth_face'
    },
    {
        emoji: '🤢',
        name: 'nauseated_face'
    },
    {
        emoji: '🤧',
        name: 'sneezing_face'
    },
    {
        emoji: '😷',
        name: 'mask'
    },
    {
        emoji: '🤒',
        name: 'face_with_thermometer'
    },
    {
        emoji: '🤕',
        name: 'face_with_head_bandage'
    },
    {
        emoji: '😴',
        name: 'sleeping'
    },
    {
        emoji: '💤',
        name: 'zzz'
    },
    {
        emoji: '💩',
        name: 'poop'
    },
    {
        emoji: '😈',
        name: 'smiling_imp'
    },
    {
        emoji: '👿',
        name: 'imp'
    },
    {
        emoji: '👹',
        name: 'japanese_ogre'
    },
    {
        emoji: '👺',
        name: 'japanese_goblin'
    },
    {
        emoji: '💀',
        name: 'skull'
    },
    {
        emoji: '👻',
        name: 'ghost'
    },
    {
        emoji: '👽',
        name: 'alien'
    },
    {
        emoji: '🤖',
        name: 'robot'
    },
    {
        emoji: '😺',
        name: 'smiley_cat'
    },
    {
        emoji: '😸',
        name: 'smile_cat'
    },
    {
        emoji: '😹',
        name: 'joy_cat'
    },
    {
        emoji: '😻',
        name: 'heart_eyes_cat'
    },
    {
        emoji: '😼',
        name: 'smirk_cat'
    },
    {
        emoji: '😽',
        name: 'kissing_cat'
    },
    {
        emoji: '🙀',
        name: 'scream_cat'
    },
    {
        emoji: '😿',
        name: 'crying_cat_face'
    },
    {
        emoji: '😾',
        name: 'pouting_cat'
    },
    {
        emoji: '🙌',
        name: 'raised_hands'
    },
    {
        emoji: '👏',
        name: 'clap'
    },
    {
        emoji: '👋',
        name: 'wave'
    },
    {
        emoji: '🤙',
        name: 'call_me_hand'
    },
    {
        emoji: '👍',
        name: '+1'
    },
    {
        emoji: '👎',
        name: '-1'
    },
    {
        emoji: '👊',
        name: 'facepunch'
    },
    {
        emoji: '✊',
        name: 'fist'
    },
    {
        emoji: '🤛',
        name: 'fist_left'
    },
    {
        emoji: '🤜',
        name: 'fist_right'
    },
    {
        emoji: '✌',
        name: 'v'
    },
    {
        emoji: '👌',
        name: 'ok_hand'
    },
    {
        emoji: '✋',
        name: 'raised_hand'
    },
    {
        emoji: '🤚',
        name: 'raised_back_of_hand'
    },
    {
        emoji: '👐',
        name: 'open_hands'
    },
    {
        emoji: '💪',
        name: 'muscle'
    },
    {
        emoji: '🙏',
        name: 'pray'
    },
    {
        emoji: '🤝',
        name: 'handshake'
    },
    {
        emoji: '☝',
        name: 'point_up'
    },
    {
        emoji: '👆',
        name: 'point_up_2'
    },
    {
        emoji: '👇',
        name: 'point_down'
    },
    {
        emoji: '👈',
        name: 'point_left'
    },
    {
        emoji: '👉',
        name: 'point_right'
    },
    {
        emoji: '🖕',
        name: 'fu'
    },
    {
        emoji: '🖐',
        name: 'raised_hand_with_fingers_splayed'
    },
    {
        emoji: '🤘',
        name: 'metal'
    },
    {
        emoji: '🤞',
        name: 'crossed_fingers'
    },
    {
        emoji: '🖖',
        name: 'vulcan_salute'
    },
    {
        emoji: '✍',
        name: 'writing_hand'
    },
    {
        emoji: '🤳',
        name: 'selfie'
    },
    {
        emoji: '💅',
        name: 'nail_care'
    },
    {
        emoji: '👄',
        name: 'lips'
    },
    {
        emoji: '👅',
        name: 'tongue'
    },
    {
        emoji: '👂',
        name: 'ear'
    },
    {
        emoji: '👃',
        name: 'nose'
    },
    {
        emoji: '👁',
        name: 'eye'
    },
    {
        emoji: '👀',
        name: 'eyes'
    },
    {
        emoji: '👤',
        name: 'bust_in_silhouette'
    },
    {
        emoji: '👥',
        name: 'busts_in_silhouette'
    },
    {
        emoji: '🗣',
        name: 'speaking_head'
    },
    {
        emoji: '👶',
        name: 'baby'
    },
    {
        emoji: '👦',
        name: 'boy'
    },
    {
        emoji: '👧',
        name: 'girl'
    },
    {
        emoji: '👨',
        name: 'man'
    },
    {
        emoji: '👩',
        name: 'woman'
    },
    {
        emoji: '👱‍',
        name: 'blonde_woman'
    },
    {
        emoji: '👱',
        name: 'blonde_man'
    },
    {
        emoji: '👴',
        name: 'older_man'
    },
    {
        emoji: '👵',
        name: 'older_woman'
    },
    {
        emoji: '👲',
        name: 'man_with_gua_pi_mao'
    },
    {
        emoji: '👳‍',
        name: 'woman_with_turban'
    },
    {
        emoji: '👳',
        name: 'man_with_turban'
    },
    {
        emoji: '👮‍',
        name: 'policewoman'
    },
    {
        emoji: '👮',
        name: 'policeman'
    },
    {
        emoji: '👷‍',
        name: 'construction_worker_woman'
    },
    {
        emoji: '👷',
        name: 'construction_worker_man'
    },
    {
        emoji: '💂‍',
        name: 'guardswoman'
    },
    {
        emoji: '💂',
        name: 'guardsman'
    },
    {
        emoji: '🕵️‍',
        name: 'female_detective'
    },
    {
        emoji: '🕵',
        name: 'male_detective'
    },
    {
        emoji: '👩‍⚕️',
        name: 'woman_health_worker'
    },
    {
        emoji: '👨‍⚕️',
        name: 'man_health_worker'
    },
    {
        emoji: '👩‍🌾',
        name: 'woman_farmer'
    },
    {
        emoji: '👨‍🌾',
        name: 'man_farmer'
    },
    {
        emoji: '👩‍🍳',
        name: 'woman_cook'
    },
    {
        emoji: '👨‍🍳',
        name: 'man_cook'
    },
    {
        emoji: '👩‍🎓',
        name: 'woman_student'
    },
    {
        emoji: '👨‍🎓',
        name: 'man_student'
    },
    {
        emoji: '👩‍🎤',
        name: 'woman_singer'
    },
    {
        emoji: '👨‍🎤',
        name: 'man_singer'
    },
    {
        emoji: '👩‍🏫',
        name: 'woman_teacher'
    },
    {
        emoji: '👨‍🏫',
        name: 'man_teacher'
    },
    {
        emoji: '👩‍🏭',
        name: 'woman_factory_worker'
    },
    {
        emoji: '👨‍🏭',
        name: 'man_factory_worker'
    },
    {
        emoji: '👩‍💻',
        name: 'woman_technologist'
    },
    {
        emoji: '👨‍💻',
        name: 'man_technologist'
    },
    {
        emoji: '👩‍💼',
        name: 'woman_office_worker'
    },
    {
        emoji: '👨‍💼',
        name: 'man_office_worker'
    },
    {
        emoji: '👩‍🔧',
        name: 'woman_mechanic'
    },
    {
        emoji: '👨‍🔧',
        name: 'man_mechanic'
    },
    {
        emoji: '👩‍🔬',
        name: 'woman_scientist'
    },
    {
        emoji: '👨‍🔬',
        name: 'man_scientist'
    },
    {
        emoji: '👩‍🎨',
        name: 'woman_artist'
    },
    {
        emoji: '👨‍🎨',
        name: 'man_artist'
    },
    {
        emoji: '👩‍🚒',
        name: 'woman_firefighter'
    },
    {
        emoji: '👨‍🚒',
        name: 'man_firefighter'
    },
    {
        emoji: '👩‍✈️',
        name: 'woman_pilot'
    },
    {
        emoji: '👨‍✈️',
        name: 'man_pilot'
    },
    {
        emoji: '👩‍🚀',
        name: 'woman_astronaut'
    },
    {
        emoji: '👨‍🚀',
        name: 'man_astronaut'
    },
    {
        emoji: '👩‍⚖️',
        name: 'woman_judge'
    },
    {
        emoji: '👨‍⚖️',
        name: 'man_judge'
    },
    {
        emoji: '🤶',
        name: 'mrs_claus'
    },
    {
        emoji: '🎅',
        name: 'santa'
    },
    {
        emoji: '👼',
        name: 'angel'
    },
    {
        emoji: '🤰',
        name: 'pregnant_woman'
    },
    {
        emoji: '👸',
        name: 'princess'
    },
    {
        emoji: '🤴',
        name: 'prince'
    },
    {
        emoji: '👰',
        name: 'bride_with_veil'
    },
    {
        emoji: '🤵',
        name: 'man_in_tuxedo'
    },
    {
        emoji: '🏃‍',
        name: 'running_woman'
    },
    {
        emoji: '🏃',
        name: 'running_man'
    },
    {
        emoji: '🚶‍',
        name: 'walking_woman'
    },
    {
        emoji: '🚶',
        name: 'walking_man'
    },
    {
        emoji: '💃',
        name: 'dancer'
    },
    {
        emoji: '🕺',
        name: 'man_dancing'
    },
    {
        emoji: '👯',
        name: 'dancing_women'
    },
    {
        emoji: '👯‍',
        name: 'dancing_men'
    },
    {
        emoji: '👫',
        name: 'couple'
    },
    {
        emoji: '👬',
        name: 'two_men_holding_hands'
    },
    {
        emoji: '👭',
        name: 'two_women_holding_hands'
    },
    {
        emoji: '🙇‍',
        name: 'bowing_woman'
    },
    {
        emoji: '🙇',
        name: 'bowing_man'
    },
    {
        emoji: '🤦',
        name: 'man_facepalming'
    },
    {
        emoji: '🤦‍',
        name: 'woman_facepalming'
    },
    {
        emoji: '🤷',
        name: 'woman_shrugging'
    },
    {
        emoji: '🤷‍',
        name: 'man_shrugging'
    },
    {
        emoji: '💁',
        name: 'tipping_hand_woman'
    },
    {
        emoji: '💁‍',
        name: 'tipping_hand_man'
    },
    {
        emoji: '🙅',
        name: 'no_good_woman'
    },
    {
        emoji: '🙅‍',
        name: 'no_good_man'
    },
    {
        emoji: '🙆',
        name: 'ok_woman'
    },
    {
        emoji: '🙆‍',
        name: 'ok_man'
    },
    {
        emoji: '🙋',
        name: 'raising_hand_woman'
    },
    {
        emoji: '🙋‍',
        name: 'raising_hand_man'
    },
    {
        emoji: '🙎',
        name: 'pouting_woman'
    },
    {
        emoji: '🙎‍',
        name: 'pouting_man'
    },
    {
        emoji: '🙍',
        name: 'frowning_woman'
    },
    {
        emoji: '🙍‍',
        name: 'frowning_man'
    },
    {
        emoji: '💇',
        name: 'haircut_woman'
    },
    {
        emoji: '💇‍',
        name: 'haircut_man'
    },
    {
        emoji: '💆',
        name: 'massage_woman'
    },
    {
        emoji: '💆‍',
        name: 'massage_man'
    },
    {
        emoji: '💑',
        name: 'couple_with_heart_woman_man'
    },
    {
        emoji: '👩‍❤️‍👩',
        name: 'couple_with_heart_woman_woman'
    },
    {
        emoji: '👨‍❤️‍👨',
        name: 'couple_with_heart_man_man'
    },
    {
        emoji: '💏',
        name: 'couplekiss_man_woman'
    },
    {
        emoji: '👩‍❤️‍💋‍👩',
        name: 'couplekiss_woman_woman'
    },
    {
        emoji: '👨‍❤️‍💋‍👨',
        name: 'couplekiss_man_man'
    },
    {
        emoji: '👪',
        name: 'family_man_woman_boy'
    },
    {
        emoji: '👨‍👩‍👧',
        name: 'family_man_woman_girl'
    },
    {
        emoji: '👨‍👩‍👧‍👦',
        name: 'family_man_woman_girl_boy'
    },
    {
        emoji: '👨‍👩‍👦‍👦',
        name: 'family_man_woman_boy_boy'
    },
    {
        emoji: '👨‍👩‍👧‍👧',
        name: 'family_man_woman_girl_girl'
    },
    {
        emoji: '👩‍👩‍👦',
        name: 'family_woman_woman_boy'
    },
    {
        emoji: '👩‍👩‍👧',
        name: 'family_woman_woman_girl'
    },
    {
        emoji: '👩‍👩‍👧‍👦',
        name: 'family_woman_woman_girl_boy'
    },
    {
        emoji: '👩‍👩‍👦‍👦',
        name: 'family_woman_woman_boy_boy'
    },
    {
        emoji: '👩‍👩‍👧‍👧',
        name: 'family_woman_woman_girl_girl'
    },
    {
        emoji: '👨‍👨‍👦',
        name: 'family_man_man_boy'
    },
    {
        emoji: '👨‍👨‍👧',
        name: 'family_man_man_girl'
    },
    {
        emoji: '👨‍👨‍👧‍👦',
        name: 'family_man_man_girl_boy'
    },
    {
        emoji: '👨‍👨‍👦‍👦',
        name: 'family_man_man_boy_boy'
    },
    {
        emoji: '👨‍👨‍👧‍👧',
        name: 'family_man_man_girl_girl'
    },
    {
        emoji: '👩‍👦',
        name: 'family_woman_boy'
    },
    {
        emoji: '👩‍👧',
        name: 'family_woman_girl'
    },
    {
        emoji: '👩‍👧‍👦',
        name: 'family_woman_girl_boy'
    },
    {
        emoji: '👩‍👦‍👦',
        name: 'family_woman_boy_boy'
    },
    {
        emoji: '👩‍👧‍👧',
        name: 'family_woman_girl_girl'
    },
    {
        emoji: '👨‍👦',
        name: 'family_man_boy'
    },
    {
        emoji: '👨‍👧',
        name: 'family_man_girl'
    },
    {
        emoji: '👨‍👧‍👦',
        name: 'family_man_girl_boy'
    },
    {
        emoji: '👨‍👦‍👦',
        name: 'family_man_boy_boy'
    },
    {
        emoji: '👨‍👧‍👧',
        name: 'family_man_girl_girl'
    },
    {
        emoji: '👚',
        name: 'womans_clothes'
    },
    {
        emoji: '👕',
        name: 'tshirt'
    },
    {
        emoji: '👖',
        name: 'jeans'
    },
    {
        emoji: '👔',
        name: 'necktie'
    },
    {
        emoji: '👗',
        name: 'dress'
    },
    {
        emoji: '👙',
        name: 'bikini'
    },
    {
        emoji: '👘',
        name: 'kimono'
    },
    {
        emoji: '💄',
        name: 'lipstick'
    },
    {
        emoji: '💋',
        name: 'kiss'
    },
    {
        emoji: '👣',
        name: 'footprints'
    },
    {
        emoji: '👠',
        name: 'high_heel'
    },
    {
        emoji: '👡',
        name: 'sandal'
    },
    {
        emoji: '👢',
        name: 'boot'
    },
    {
        emoji: '👞',
        name: 'mans_shoe'
    },
    {
        emoji: '👟',
        name: 'athletic_shoe'
    },
    {
        emoji: '👒',
        name: 'womans_hat'
    },
    {
        emoji: '🎩',
        name: 'tophat'
    },
    {
        emoji: '⛑',
        name: 'rescue_worker_helmet'
    },
    {
        emoji: '🎓',
        name: 'mortar_board'
    },
    {
        emoji: '👑',
        name: 'crown'
    },
    {
        emoji: '🎒',
        name: 'school_satchel'
    },
    {
        emoji: '👝',
        name: 'pouch'
    },
    {
        emoji: '👛',
        name: 'purse'
    },
    {
        emoji: '👜',
        name: 'handbag'
    },
    {
        emoji: '💼',
        name: 'briefcase'
    },
    {
        emoji: '👓',
        name: 'eyeglasses'
    },
    {
        emoji: '🕶',
        name: 'dark_sunglasses'
    },
    {
        emoji: '💍',
        name: 'ring'
    },
    {
        emoji: '🌂',
        name: 'closed_umbrella'
    },
    {
        emoji: '🐶',
        name: 'dog'
    },
    {
        emoji: '🐱',
        name: 'cat'
    },
    {
        emoji: '🐭',
        name: 'mouse'
    },
    {
        emoji: '🐹',
        name: 'hamster'
    },
    {
        emoji: '🐰',
        name: 'rabbit'
    },
    {
        emoji: '🦊',
        name: 'fox_face'
    },
    {
        emoji: '🐻',
        name: 'bear'
    },
    {
        emoji: '🐼',
        name: 'panda_face'
    },
    {
        emoji: '🐨',
        name: 'koala'
    },
    {
        emoji: '🐯',
        name: 'tiger'
    },
    {
        emoji: '🦁',
        name: 'lion'
    },
    {
        emoji: '🐮',
        name: 'cow'
    },
    {
        emoji: '🐷',
        name: 'pig'
    },
    {
        emoji: '🐽',
        name: 'pig_nose'
    },
    {
        emoji: '🐸',
        name: 'frog'
    },
    {
        emoji: '🦑',
        name: 'squid'
    },
    {
        emoji: '🐙',
        name: 'octopus'
    },
    {
        emoji: '🦐',
        name: 'shrimp'
    },
    {
        emoji: '🐵',
        name: 'monkey_face'
    },
    {
        emoji: '🦍',
        name: 'gorilla'
    },
    {
        emoji: '🙈',
        name: 'see_no_evil'
    },
    {
        emoji: '🙉',
        name: 'hear_no_evil'
    },
    {
        emoji: '🙊',
        name: 'speak_no_evil'
    },
    {
        emoji: '🐒',
        name: 'monkey'
    },
    {
        emoji: '🐔',
        name: 'chicken'
    },
    {
        emoji: '🐧',
        name: 'penguin'
    },
    {
        emoji: '🐦',
        name: 'bird'
    },
    {
        emoji: '🐤',
        name: 'baby_chick'
    },
    {
        emoji: '🐣',
        name: 'hatching_chick'
    },
    {
        emoji: '🐥',
        name: 'hatched_chick'
    },
    {
        emoji: '🦆',
        name: 'duck'
    },
    {
        emoji: '🦅',
        name: 'eagle'
    },
    {
        emoji: '🦉',
        name: 'owl'
    },
    {
        emoji: '🦇',
        name: 'bat'
    },
    {
        emoji: '🐺',
        name: 'wolf'
    },
    {
        emoji: '🐗',
        name: 'boar'
    },
    {
        emoji: '🐴',
        name: 'horse'
    },
    {
        emoji: '🦄',
        name: 'unicorn'
    },
    {
        emoji: '🐝',
        name: 'honeybee'
    },
    {
        emoji: '🐛',
        name: 'bug'
    },
    {
        emoji: '🦋',
        name: 'butterfly'
    },
    {
        emoji: '🐌',
        name: 'snail'
    },
    {
        emoji: '🐞',
        name: 'beetle'
    },
    {
        emoji: '🐜',
        name: 'ant'
    },
    {
        emoji: '🕷',
        name: 'spider'
    },
    {
        emoji: '🦂',
        name: 'scorpion'
    },
    {
        emoji: '🦀',
        name: 'crab'
    },
    {
        emoji: '🐍',
        name: 'snake'
    },
    {
        emoji: '🦎',
        name: 'lizard'
    },
    {
        emoji: '🐢',
        name: 'turtle'
    },
    {
        emoji: '🐠',
        name: 'tropical_fish'
    },
    {
        emoji: '🐟',
        name: 'fish'
    },
    {
        emoji: '🐡',
        name: 'blowfish'
    },
    {
        emoji: '🐬',
        name: 'dolphin'
    },
    {
        emoji: '🦈',
        name: 'shark'
    },
    {
        emoji: '🐳',
        name: 'whale'
    },
    {
        emoji: '🐋',
        name: 'whale2'
    },
    {
        emoji: '🐊',
        name: 'crocodile'
    },
    {
        emoji: '🐆',
        name: 'leopard'
    },
    {
        emoji: '🐅',
        name: 'tiger2'
    },
    {
        emoji: '🐃',
        name: 'water_buffalo'
    },
    {
        emoji: '🐂',
        name: 'ox'
    },
    {
        emoji: '🐄',
        name: 'cow2'
    },
    {
        emoji: '🦌',
        name: 'deer'
    },
    {
        emoji: '🐪',
        name: 'dromedary_camel'
    },
    {
        emoji: '🐫',
        name: 'camel'
    },
    {
        emoji: '🐘',
        name: 'elephant'
    },
    {
        emoji: '🦏',
        name: 'rhinoceros'
    },
    {
        emoji: '🐐',
        name: 'goat'
    },
    {
        emoji: '🐏',
        name: 'ram'
    },
    {
        emoji: '🐑',
        name: 'sheep'
    },
    {
        emoji: '🐎',
        name: 'racehorse'
    },
    {
        emoji: '🐖',
        name: 'pig2'
    },
    {
        emoji: '🐀',
        name: 'rat'
    },
    {
        emoji: '🐁',
        name: 'mouse2'
    },
    {
        emoji: '🐓',
        name: 'rooster'
    },
    {
        emoji: '🦃',
        name: 'turkey'
    },
    {
        emoji: '🕊',
        name: 'dove'
    },
    {
        emoji: '🐕',
        name: 'dog2'
    },
    {
        emoji: '🐩',
        name: 'poodle'
    },
    {
        emoji: '🐈',
        name: 'cat2'
    },
    {
        emoji: '🐇',
        name: 'rabbit2'
    },
    {
        emoji: '🐿',
        name: 'chipmunk'
    },
    {
        emoji: '🐾',
        name: 'paw_prints'
    },
    {
        emoji: '🐉',
        name: 'dragon'
    },
    {
        emoji: '🐲',
        name: 'dragon_face'
    },
    {
        emoji: '🌵',
        name: 'cactus'
    },
    {
        emoji: '🎄',
        name: 'christmas_tree'
    },
    {
        emoji: '🌲',
        name: 'evergreen_tree'
    },
    {
        emoji: '🌳',
        name: 'deciduous_tree'
    },
    {
        emoji: '🌴',
        name: 'palm_tree'
    },
    {
        emoji: '🌱',
        name: 'seedling'
    },
    {
        emoji: '🌿',
        name: 'herb'
    },
    {
        emoji: '☘',
        name: 'shamrock'
    },
    {
        emoji: '🍀',
        name: 'four_leaf_clover'
    },
    {
        emoji: '🎍',
        name: 'bamboo'
    },
    {
        emoji: '🎋',
        name: 'tanabata_tree'
    },
    {
        emoji: '🍃',
        name: 'leaves'
    },
    {
        emoji: '🍂',
        name: 'fallen_leaf'
    },
    {
        emoji: '🍁',
        name: 'maple_leaf'
    },
    {
        emoji: '🌾',
        name: 'ear_of_rice'
    },
    {
        emoji: '🌺',
        name: 'hibiscus'
    },
    {
        emoji: '🌻',
        name: 'sunflower'
    },
    {
        emoji: '🌹',
        name: 'rose'
    },
    {
        emoji: '🥀',
        name: 'wilted_flower'
    },
    {
        emoji: '🌷',
        name: 'tulip'
    },
    {
        emoji: '🌼',
        name: 'blossom'
    },
    {
        emoji: '🌸',
        name: 'cherry_blossom'
    },
    {
        emoji: '💐',
        name: 'bouquet'
    },
    {
        emoji: '🍄',
        name: 'mushroom'
    },
    {
        emoji: '🌰',
        name: 'chestnut'
    },
    {
        emoji: '🎃',
        name: 'jack_o_lantern'
    },
    {
        emoji: '🐚',
        name: 'shell'
    },
    {
        emoji: '🕸',
        name: 'spider_web'
    },
    {
        emoji: '🌎',
        name: 'earth_americas'
    },
    {
        emoji: '🌍',
        name: 'earth_africa'
    },
    {
        emoji: '🌏',
        name: 'earth_asia'
    },
    {
        emoji: '🌕',
        name: 'full_moon'
    },
    {
        emoji: '🌖',
        name: 'waning_gibbous_moon'
    },
    {
        emoji: '🌗',
        name: 'last_quarter_moon'
    },
    {
        emoji: '🌘',
        name: 'waning_crescent_moon'
    },
    {
        emoji: '🌑',
        name: 'new_moon'
    },
    {
        emoji: '🌒',
        name: 'waxing_crescent_moon'
    },
    {
        emoji: '🌓',
        name: 'first_quarter_moon'
    },
    {
        emoji: '🌔',
        name: 'waxing_gibbous_moon'
    },
    {
        emoji: '🌚',
        name: 'new_moon_with_face'
    },
    {
        emoji: '🌝',
        name: 'full_moon_with_face'
    },
    {
        emoji: '🌛',
        name: 'first_quarter_moon_with_face'
    },
    {
        emoji: '🌜',
        name: 'last_quarter_moon_with_face'
    },
    {
        emoji: '🌞',
        name: 'sun_with_face'
    },
    {
        emoji: '🌙',
        name: 'crescent_moon'
    },
    {
        emoji: '⭐',
        name: 'star'
    },
    {
        emoji: '🌟',
        name: 'star2'
    },
    {
        emoji: '💫',
        name: 'dizzy'
    },
    {
        emoji: '✨',
        name: 'sparkles'
    },
    {
        emoji: '☄',
        name: 'comet'
    },
    {
        emoji: '☀️',
        name: 'sunny'
    },
    {
        emoji: '🌤',
        name: 'sun_behind_small_cloud'
    },
    {
        emoji: '⛅',
        name: 'partly_sunny'
    },
    {
        emoji: '🌥',
        name: 'sun_behind_large_cloud'
    },
    {
        emoji: '🌦',
        name: 'sun_behind_rain_cloud'
    },
    {
        emoji: '☁️',
        name: 'cloud'
    },
    {
        emoji: '🌧',
        name: 'cloud_with_rain'
    },
    {
        emoji: '⛈',
        name: 'cloud_with_lightning_and_rain'
    },
    {
        emoji: '🌩',
        name: 'cloud_with_lightning'
    },
    {
        emoji: '⚡',
        name: 'zap'
    },
    {
        emoji: '🔥',
        name: 'fire'
    },
    {
        emoji: '💥',
        name: 'boom'
    },
    {
        emoji: '❄️',
        name: 'snowflake'
    },
    {
        emoji: '🌨',
        name: 'cloud_with_snow'
    },
    {
        emoji: '⛄',
        name: 'snowman'
    },
    {
        emoji: '☃',
        name: 'snowman_with_snow'
    },
    {
        emoji: '🌬',
        name: 'wind_face'
    },
    {
        emoji: '💨',
        name: 'dash'
    },
    {
        emoji: '🌪',
        name: 'tornado'
    },
    {
        emoji: '🌫',
        name: 'fog'
    },
    {
        emoji: '☂',
        name: 'open_umbrella'
    },
    {
        emoji: '☔',
        name: 'umbrella'
    },
    {
        emoji: '💧',
        name: 'droplet'
    },
    {
        emoji: '💦',
        name: 'sweat_drops'
    },
    {
        emoji: '🌊',
        name: 'ocean'
    },
    {
        emoji: '🍏',
        name: 'green_apple'
    },
    {
        emoji: '🍎',
        name: 'apple'
    },
    {
        emoji: '🍐',
        name: 'pear'
    },
    {
        emoji: '🍊',
        name: 'tangerine'
    },
    {
        emoji: '🍋',
        name: 'lemon'
    },
    {
        emoji: '🍌',
        name: 'banana'
    },
    {
        emoji: '🍉',
        name: 'watermelon'
    },
    {
        emoji: '🍇',
        name: 'grapes'
    },
    {
        emoji: '🍓',
        name: 'strawberry'
    },
    {
        emoji: '🍈',
        name: 'melon'
    },
    {
        emoji: '🍒',
        name: 'cherries'
    },
    {
        emoji: '🍑',
        name: 'peach'
    },
    {
        emoji: '🍍',
        name: 'pineapple'
    },
    {
        emoji: '🥝',
        name: 'kiwi_fruit'
    },
    {
        emoji: '🥑',
        name: 'avocado'
    },
    {
        emoji: '🍅',
        name: 'tomato'
    },
    {
        emoji: '🍆',
        name: 'eggplant'
    },
    {
        emoji: '🥒',
        name: 'cucumber'
    },
    {
        emoji: '🥕',
        name: 'carrot'
    },
    {
        emoji: '🌶',
        name: 'hot_pepper'
    },
    {
        emoji: '🥔',
        name: 'potato'
    },
    {
        emoji: '🌽',
        name: 'corn'
    },
    {
        emoji: '🍠',
        name: 'sweet_potato'
    },
    {
        emoji: '🥜',
        name: 'peanuts'
    },
    {
        emoji: '🍯',
        name: 'honey_pot'
    },
    {
        emoji: '🥐',
        name: 'croissant'
    },
    {
        emoji: '🍞',
        name: 'bread'
    },
    {
        emoji: '🥖',
        name: 'baguette_bread'
    },
    {
        emoji: '🧀',
        name: 'cheese'
    },
    {
        emoji: '🥚',
        name: 'egg'
    },
    {
        emoji: '🥓',
        name: 'bacon'
    },
    {
        emoji: '🥞',
        name: 'pancakes'
    },
    {
        emoji: '🍗',
        name: 'poultry_leg'
    },
    {
        emoji: '🍖',
        name: 'meat_on_bone'
    },
    {
        emoji: '🍤',
        name: 'fried_shrimp'
    },
    {
        emoji: '🍳',
        name: 'fried_egg'
    },
    {
        emoji: '🍔',
        name: 'hamburger'
    },
    {
        emoji: '🍟',
        name: 'fries'
    },
    {
        emoji: '🥙',
        name: 'stuffed_flatbread'
    },
    {
        emoji: '🌭',
        name: 'hotdog'
    },
    {
        emoji: '🍕',
        name: 'pizza'
    },
    {
        emoji: '🍝',
        name: 'spaghetti'
    },
    {
        emoji: '🌮',
        name: 'taco'
    },
    {
        emoji: '🌯',
        name: 'burrito'
    },
    {
        emoji: '🥗',
        name: 'green_salad'
    },
    {
        emoji: '🥘',
        name: 'shallow_pan_of_food'
    },
    {
        emoji: '🍜',
        name: 'ramen'
    },
    {
        emoji: '🍲',
        name: 'stew'
    },
    {
        emoji: '🍥',
        name: 'fish_cake'
    },
    {
        emoji: '🍣',
        name: 'sushi'
    },
    {
        emoji: '🍱',
        name: 'bento'
    },
    {
        emoji: '🍛',
        name: 'curry'
    },
    {
        emoji: '🍙',
        name: 'rice_ball'
    },
    {
        emoji: '🍚',
        name: 'rice'
    },
    {
        emoji: '🍘',
        name: 'rice_cracker'
    },
    {
        emoji: '🍢',
        name: 'oden'
    },
    {
        emoji: '🍡',
        name: 'dango'
    },
    {
        emoji: '🍧',
        name: 'shaved_ice'
    },
    {
        emoji: '🍨',
        name: 'ice_cream'
    },
    {
        emoji: '🍦',
        name: 'icecream'
    },
    {
        emoji: '🍰',
        name: 'cake'
    },
    {
        emoji: '🎂',
        name: 'birthday'
    },
    {
        emoji: '🍮',
        name: 'custard'
    },
    {
        emoji: '🍬',
        name: 'candy'
    },
    {
        emoji: '🍭',
        name: 'lollipop'
    },
    {
        emoji: '🍫',
        name: 'chocolate_bar'
    },
    {
        emoji: '🍿',
        name: 'popcorn'
    },
    {
        emoji: '🍩',
        name: 'doughnut'
    },
    {
        emoji: '🍪',
        name: 'cookie'
    },
    {
        emoji: '🥛',
        name: 'milk_glass'
    },
    {
        emoji: '🍺',
        name: 'beer'
    },
    {
        emoji: '🍻',
        name: 'beers'
    },
    {
        emoji: '🥂',
        name: 'clinking_glasses'
    },
    {
        emoji: '🍷',
        name: 'wine_glass'
    },
    {
        emoji: '🥃',
        name: 'tumbler_glass'
    },
    {
        emoji: '🍸',
        name: 'cocktail'
    },
    {
        emoji: '🍹',
        name: 'tropical_drink'
    },
    {
        emoji: '🍾',
        name: 'champagne'
    },
    {
        emoji: '🍶',
        name: 'sake'
    },
    {
        emoji: '🍵',
        name: 'tea'
    },
    {
        emoji: '☕',
        name: 'coffee'
    },
    {
        emoji: '🍼',
        name: 'baby_bottle'
    },
    {
        emoji: '🥄',
        name: 'spoon'
    },
    {
        emoji: '🍴',
        name: 'fork_and_knife'
    },
    {
        emoji: '🍽',
        name: 'plate_with_cutlery'
    },
    {
        emoji: '⚽',
        name: 'soccer'
    },
    {
        emoji: '🏀',
        name: 'basketball'
    },
    {
        emoji: '🏈',
        name: 'football'
    },
    {
        emoji: '⚾',
        name: 'baseball'
    },
    {
        emoji: '🎾',
        name: 'tennis'
    },
    {
        emoji: '🏐',
        name: 'volleyball'
    },
    {
        emoji: '🏉',
        name: 'rugby_football'
    },
    {
        emoji: '🎱',
        name: '8ball'
    },
    {
        emoji: '⛳',
        name: 'golf'
    },
    {
        emoji: '🏌️‍',
        name: 'golfing_woman'
    },
    {
        emoji: '🏌',
        name: 'golfing_man'
    },
    {
        emoji: '🏓',
        name: 'ping_pong'
    },
    {
        emoji: '🏸',
        name: 'badminton'
    },
    {
        emoji: '🥅',
        name: 'goal_net'
    },
    {
        emoji: '🏒',
        name: 'ice_hockey'
    },
    {
        emoji: '🏑',
        name: 'field_hockey'
    },
    {
        emoji: '🏏',
        name: 'cricket'
    },
    {
        emoji: '🎿',
        name: 'ski'
    },
    {
        emoji: '⛷',
        name: 'skier'
    },
    {
        emoji: '🏂',
        name: 'snowboarder'
    },
    {
        emoji: '🤺',
        name: 'person_fencing'
    },
    {
        emoji: '🤼‍',
        name: 'women_wrestling'
    },
    {
        emoji: '🤼‍',
        name: 'men_wrestling'
    },
    {
        emoji: '🤸‍',
        name: 'woman_cartwheeling'
    },
    {
        emoji: '🤸‍',
        name: 'man_cartwheeling'
    },
    {
        emoji: '🤾‍',
        name: 'woman_playing_handball'
    },
    {
        emoji: '🤾‍',
        name: 'man_playing_handball'
    },
    {
        emoji: '⛸',
        name: 'ice_skate'
    },
    {
        emoji: '🏹',
        name: 'bow_and_arrow'
    },
    {
        emoji: '🎣',
        name: 'fishing_pole_and_fish'
    },
    {
        emoji: '🥊',
        name: 'boxing_glove'
    },
    {
        emoji: '🥋',
        name: 'martial_arts_uniform'
    },
    {
        emoji: '🚣‍',
        name: 'rowing_woman'
    },
    {
        emoji: '🚣',
        name: 'rowing_man'
    },
    {
        emoji: '🏊‍',
        name: 'swimming_woman'
    },
    {
        emoji: '🏊',
        name: 'swimming_man'
    },
    {
        emoji: '🤽‍',
        name: 'woman_playing_water_polo'
    },
    {
        emoji: '🤽‍',
        name: 'man_playing_water_polo'
    },
    {
        emoji: '🏄‍',
        name: 'surfing_woman'
    },
    {
        emoji: '🏄',
        name: 'surfing_man'
    },
    {
        emoji: '🛀',
        name: 'bath'
    },
    {
        emoji: '⛹️‍',
        name: 'basketball_woman'
    },
    {
        emoji: '⛹',
        name: 'basketball_man'
    },
    {
        emoji: '🏋️‍',
        name: 'weight_lifting_woman'
    },
    {
        emoji: '🏋',
        name: 'weight_lifting_man'
    },
    {
        emoji: '🚴‍',
        name: 'biking_woman'
    },
    {
        emoji: '🚴',
        name: 'biking_man'
    },
    {
        emoji: '🚵‍',
        name: 'mountain_biking_woman'
    },
    {
        emoji: '🚵',
        name: 'mountain_biking_man'
    },
    {
        emoji: '🏇',
        name: 'horse_racing'
    },
    {
        emoji: '🕴',
        name: 'business_suit_levitating'
    },
    {
        emoji: '🏆',
        name: 'trophy'
    },
    {
        emoji: '🎽',
        name: 'running_shirt_with_sash'
    },
    {
        emoji: '🏅',
        name: 'medal_sports'
    },
    {
        emoji: '🎖',
        name: 'medal_military'
    },
    {
        emoji: '🥇',
        name: '1st_place_medal'
    },
    {
        emoji: '🥈',
        name: '2nd_place_medal'
    },
    {
        emoji: '🥉',
        name: '3rd_place_medal'
    },
    {
        emoji: '🎗',
        name: 'reminder_ribbon'
    },
    {
        emoji: '🏵',
        name: 'rosette'
    },
    {
        emoji: '🎫',
        name: 'ticket'
    },
    {
        emoji: '🎟',
        name: 'tickets'
    },
    {
        emoji: '🎭',
        name: 'performing_arts'
    },
    {
        emoji: '🎨',
        name: 'art'
    },
    {
        emoji: '🎪',
        name: 'circus_tent'
    },
    {
        emoji: '🤹‍',
        name: 'woman_juggling'
    },
    {
        emoji: '🤹‍',
        name: 'man_juggling'
    },
    {
        emoji: '🎤',
        name: 'microphone'
    },
    {
        emoji: '🎧',
        name: 'headphones'
    },
    {
        emoji: '🎼',
        name: 'musical_score'
    },
    {
        emoji: '🎹',
        name: 'musical_keyboard'
    },
    {
        emoji: '🥁',
        name: 'drum'
    },
    {
        emoji: '🎷',
        name: 'saxophone'
    },
    {
        emoji: '🎺',
        name: 'trumpet'
    },
    {
        emoji: '🎸',
        name: 'guitar'
    },
    {
        emoji: '🎻',
        name: 'violin'
    },
    {
        emoji: '🎬',
        name: 'clapper'
    },
    {
        emoji: '🎮',
        name: 'video_game'
    },
    {
        emoji: '👾',
        name: 'space_invader'
    },
    {
        emoji: '🎯',
        name: 'dart'
    },
    {
        emoji: '🎲',
        name: 'game_die'
    },
    {
        emoji: '🎰',
        name: 'slot_machine'
    },
    {
        emoji: '🎳',
        name: 'bowling'
    },
    {
        emoji: '🚗',
        name: 'red_car'
    },
    {
        emoji: '🚕',
        name: 'taxi'
    },
    {
        emoji: '🚙',
        name: 'blue_car'
    },
    {
        emoji: '🚌',
        name: 'bus'
    },
    {
        emoji: '🚎',
        name: 'trolleybus'
    },
    {
        emoji: '🏎',
        name: 'racing_car'
    },
    {
        emoji: '🚓',
        name: 'police_car'
    },
    {
        emoji: '🚑',
        name: 'ambulance'
    },
    {
        emoji: '🚒',
        name: 'fire_engine'
    },
    {
        emoji: '🚐',
        name: 'minibus'
    },
    {
        emoji: '🚚',
        name: 'truck'
    },
    {
        emoji: '🚛',
        name: 'articulated_lorry'
    },
    {
        emoji: '🚜',
        name: 'tractor'
    },
    {
        emoji: '🛴',
        name: 'kick_scooter'
    },
    {
        emoji: '🏍',
        name: 'motorcycle'
    },
    {
        emoji: '🚲',
        name: 'bike'
    },
    {
        emoji: '🛵',
        name: 'motor_scooter'
    },
    {
        emoji: '🚨',
        name: 'rotating_light'
    },
    {
        emoji: '🚔',
        name: 'oncoming_police_car'
    },
    {
        emoji: '🚍',
        name: 'oncoming_bus'
    },
    {
        emoji: '🚘',
        name: 'oncoming_automobile'
    },
    {
        emoji: '🚖',
        name: 'oncoming_taxi'
    },
    {
        emoji: '🚡',
        name: 'aerial_tramway'
    },
    {
        emoji: '🚠',
        name: 'mountain_cableway'
    },
    {
        emoji: '🚟',
        name: 'suspension_railway'
    },
    {
        emoji: '🚃',
        name: 'railway_car'
    },
    {
        emoji: '🚋',
        name: 'train'
    },
    {
        emoji: '🚝',
        name: 'monorail'
    },
    {
        emoji: '🚄',
        name: 'bullettrain_side'
    },
    {
        emoji: '🚅',
        name: 'bullettrain_front'
    },
    {
        emoji: '🚈',
        name: 'light_rail'
    },
    {
        emoji: '🚞',
        name: 'mountain_railway'
    },
    {
        emoji: '🚂',
        name: 'steam_locomotive'
    },
    {
        emoji: '🚆',
        name: 'train2'
    },
    {
        emoji: '🚇',
        name: 'metro'
    },
    {
        emoji: '🚊',
        name: 'tram'
    },
    {
        emoji: '🚉',
        name: 'station'
    },
    {
        emoji: '🚁',
        name: 'helicopter'
    },
    {
        emoji: '🛩',
        name: 'small_airplane'
    },
    {
        emoji: '✈️',
        name: 'airplane'
    },
    {
        emoji: '🛫',
        name: 'flight_departure'
    },
    {
        emoji: '🛬',
        name: 'flight_arrival'
    },
    {
        emoji: '⛵',
        name: 'sailboat'
    },
    {
        emoji: '🛥',
        name: 'motor_boat'
    },
    {
        emoji: '🚤',
        name: 'speedboat'
    },
    {
        emoji: '⛴',
        name: 'ferry'
    },
    {
        emoji: '🛳',
        name: 'passenger_ship'
    },
    {
        emoji: '🚀',
        name: 'rocket'
    },
    {
        emoji: '🛰',
        name: 'artificial_satellite'
    },
    {
        emoji: '💺',
        name: 'seat'
    },
    {
        emoji: '🛶',
        name: 'canoe'
    },
    {
        emoji: '⚓',
        name: 'anchor'
    },
    {
        emoji: '🚧',
        name: 'construction'
    },
    {
        emoji: '⛽',
        name: 'fuelpump'
    },
    {
        emoji: '🚏',
        name: 'busstop'
    },
    {
        emoji: '🚦',
        name: 'vertical_traffic_light'
    },
    {
        emoji: '🚥',
        name: 'traffic_light'
    },
    {
        emoji: '🏁',
        name: 'checkered_flag'
    },
    {
        emoji: '🚢',
        name: 'ship'
    },
    {
        emoji: '🎡',
        name: 'ferris_wheel'
    },
    {
        emoji: '🎢',
        name: 'roller_coaster'
    },
    {
        emoji: '🎠',
        name: 'carousel_horse'
    },
    {
        emoji: '🏗',
        name: 'building_construction'
    },
    {
        emoji: '🌁',
        name: 'foggy'
    },
    {
        emoji: '🗼',
        name: 'tokyo_tower'
    },
    {
        emoji: '🏭',
        name: 'factory'
    },
    {
        emoji: '⛲',
        name: 'fountain'
    },
    {
        emoji: '🎑',
        name: 'rice_scene'
    },
    {
        emoji: '⛰',
        name: 'mountain'
    },
    {
        emoji: '🏔',
        name: 'mountain_snow'
    },
    {
        emoji: '🗻',
        name: 'mount_fuji'
    },
    {
        emoji: '🌋',
        name: 'volcano'
    },
    {
        emoji: '🗾',
        name: 'japan'
    },
    {
        emoji: '🏕',
        name: 'camping'
    },
    {
        emoji: '⛺',
        name: 'tent'
    },
    {
        emoji: '🏞',
        name: 'national_park'
    },
    {
        emoji: '🛣',
        name: 'motorway'
    },
    {
        emoji: '🛤',
        name: 'railway_track'
    },
    {
        emoji: '🌅',
        name: 'sunrise'
    },
    {
        emoji: '🌄',
        name: 'sunrise_over_mountains'
    },
    {
        emoji: '🏜',
        name: 'desert'
    },
    {
        emoji: '🏖',
        name: 'beach_umbrella'
    },
    {
        emoji: '🏝',
        name: 'desert_island'
    },
    {
        emoji: '🌇',
        name: 'city_sunrise'
    },
    {
        emoji: '🌆',
        name: 'city_sunset'
    },
    {
        emoji: '🏙',
        name: 'cityscape'
    },
    {
        emoji: '🌃',
        name: 'night_with_stars'
    },
    {
        emoji: '🌉',
        name: 'bridge_at_night'
    },
    {
        emoji: '🌌',
        name: 'milky_way'
    },
    {
        emoji: '🌠',
        name: 'stars'
    },
    {
        emoji: '🎇',
        name: 'sparkler'
    },
    {
        emoji: '🎆',
        name: 'fireworks'
    },
    {
        emoji: '🌈',
        name: 'rainbow'
    },
    {
        emoji: '🏘',
        name: 'houses'
    },
    {
        emoji: '🏰',
        name: 'european_castle'
    },
    {
        emoji: '🏯',
        name: 'japanese_castle'
    },
    {
        emoji: '🏟',
        name: 'stadium'
    },
    {
        emoji: '🗽',
        name: 'statue_of_liberty'
    },
    {
        emoji: '🏠',
        name: 'house'
    },
    {
        emoji: '🏡',
        name: 'house_with_garden'
    },
    {
        emoji: '🏚',
        name: 'derelict_house'
    },
    {
        emoji: '🏢',
        name: 'office'
    },
    {
        emoji: '🏬',
        name: 'department_store'
    },
    {
        emoji: '🏣',
        name: 'post_office'
    },
    {
        emoji: '🏤',
        name: 'european_post_office'
    },
    {
        emoji: '🏥',
        name: 'hospital'
    },
    {
        emoji: '🏦',
        name: 'bank'
    },
    {
        emoji: '🏨',
        name: 'hotel'
    },
    {
        emoji: '🏪',
        name: 'convenience_store'
    },
    {
        emoji: '🏫',
        name: 'school'
    },
    {
        emoji: '🏩',
        name: 'love_hotel'
    },
    {
        emoji: '💒',
        name: 'wedding'
    },
    {
        emoji: '🏛',
        name: 'classical_building'
    },
    {
        emoji: '⛪',
        name: 'church'
    },
    {
        emoji: '🕌',
        name: 'mosque'
    },
    {
        emoji: '🕍',
        name: 'synagogue'
    },
    {
        emoji: '🕋',
        name: 'kaaba'
    },
    {
        emoji: '⛩',
        name: 'shinto_shrine'
    },
    {
        emoji: '⌚',
        name: 'watch'
    },
    {
        emoji: '📱',
        name: 'iphone'
    },
    {
        emoji: '📲',
        name: 'calling'
    },
    {
        emoji: '💻',
        name: 'computer'
    },
    {
        emoji: '⌨',
        name: 'keyboard'
    },
    {
        emoji: '🖥',
        name: 'desktop_computer'
    },
    {
        emoji: '🖨',
        name: 'printer'
    },
    {
        emoji: '🖱',
        name: 'computer_mouse'
    },
    {
        emoji: '🖲',
        name: 'trackball'
    },
    {
        emoji: '🕹',
        name: 'joystick'
    },
    {
        emoji: '🗜',
        name: 'clamp'
    },
    {
        emoji: '💽',
        name: 'minidisc'
    },
    {
        emoji: '💾',
        name: 'floppy_disk'
    },
    {
        emoji: '💿',
        name: 'cd'
    },
    {
        emoji: '📀',
        name: 'dvd'
    },
    {
        emoji: '📼',
        name: 'vhs'
    },
    {
        emoji: '📷',
        name: 'camera'
    },
    {
        emoji: '📸',
        name: 'camera_flash'
    },
    {
        emoji: '📹',
        name: 'video_camera'
    },
    {
        emoji: '🎥',
        name: 'movie_camera'
    },
    {
        emoji: '📽',
        name: 'film_projector'
    },
    {
        emoji: '🎞',
        name: 'film_strip'
    },
    {
        emoji: '📞',
        name: 'telephone_receiver'
    },
    {
        emoji: '☎️',
        name: 'phone'
    },
    {
        emoji: '📟',
        name: 'pager'
    },
    {
        emoji: '📠',
        name: 'fax'
    },
    {
        emoji: '📺',
        name: 'tv'
    },
    {
        emoji: '📻',
        name: 'radio'
    },
    {
        emoji: '🎙',
        name: 'studio_microphone'
    },
    {
        emoji: '🎚',
        name: 'level_slider'
    },
    {
        emoji: '🎛',
        name: 'control_knobs'
    },
    {
        emoji: '⏱',
        name: 'stopwatch'
    },
    {
        emoji: '⏲',
        name: 'timer_clock'
    },
    {
        emoji: '⏰',
        name: 'alarm_clock'
    },
    {
        emoji: '🕰',
        name: 'mantelpiece_clock'
    },
    {
        emoji: '⏳',
        name: 'hourglass_flowing_sand'
    },
    {
        emoji: '⌛',
        name: 'hourglass'
    },
    {
        emoji: '📡',
        name: 'satellite'
    },
    {
        emoji: '🔋',
        name: 'battery'
    },
    {
        emoji: '🔌',
        name: 'electric_plug'
    },
    {
        emoji: '💡',
        name: 'bulb'
    },
    {
        emoji: '🔦',
        name: 'flashlight'
    },
    {
        emoji: '🕯',
        name: 'candle'
    },
    {
        emoji: '🗑',
        name: 'wastebasket'
    },
    {
        emoji: '🛢',
        name: 'oil_drum'
    },
    {
        emoji: '💸',
        name: 'money_with_wings'
    },
    {
        emoji: '💵',
        name: 'dollar'
    },
    {
        emoji: '💴',
        name: 'yen'
    },
    {
        emoji: '💶',
        name: 'euro'
    },
    {
        emoji: '💷',
        name: 'pound'
    },
    {
        emoji: '💰',
        name: 'moneybag'
    },
    {
        emoji: '💳',
        name: 'credit_card'
    },
    {
        emoji: '💎',
        name: 'gem'
    },
    {
        emoji: '⚖',
        name: 'balance_scale'
    },
    {
        emoji: '🔧',
        name: 'wrench'
    },
    {
        emoji: '🔨',
        name: 'hammer'
    },
    {
        emoji: '⚒',
        name: 'hammer_and_pick'
    },
    {
        emoji: '🛠',
        name: 'hammer_and_wrench'
    },
    {
        emoji: '⛏',
        name: 'pick'
    },
    {
        emoji: '🔩',
        name: 'nut_and_bolt'
    },
    {
        emoji: '⚙',
        name: 'gear'
    },
    {
        emoji: '⛓',
        name: 'chains'
    },
    {
        emoji: '🔫',
        name: 'gun'
    },
    {
        emoji: '💣',
        name: 'bomb'
    },
    {
        emoji: '🔪',
        name: 'hocho'
    },
    {
        emoji: '🗡',
        name: 'dagger'
    },
    {
        emoji: '⚔',
        name: 'crossed_swords'
    },
    {
        emoji: '🛡',
        name: 'shield'
    },
    {
        emoji: '🚬',
        name: 'smoking'
    },
    {
        emoji: '☠',
        name: 'skull_and_crossbones'
    },
    {
        emoji: '⚰',
        name: 'coffin'
    },
    {
        emoji: '⚱',
        name: 'funeral_urn'
    },
    {
        emoji: '🏺',
        name: 'amphora'
    },
    {
        emoji: '🔮',
        name: 'crystal_ball'
    },
    {
        emoji: '📿',
        name: 'prayer_beads'
    },
    {
        emoji: '💈',
        name: 'barber'
    },
    {
        emoji: '⚗',
        name: 'alembic'
    },
    {
        emoji: '🔭',
        name: 'telescope'
    },
    {
        emoji: '🔬',
        name: 'microscope'
    },
    {
        emoji: '🕳',
        name: 'hole'
    },
    {
        emoji: '💊',
        name: 'pill'
    },
    {
        emoji: '💉',
        name: 'syringe'
    },
    {
        emoji: '🌡',
        name: 'thermometer'
    },
    {
        emoji: '🏷',
        name: 'label'
    },
    {
        emoji: '🔖',
        name: 'bookmark'
    },
    {
        emoji: '🚽',
        name: 'toilet'
    },
    {
        emoji: '🚿',
        name: 'shower'
    },
    {
        emoji: '🛁',
        name: 'bathtub'
    },
    {
        emoji: '🔑',
        name: 'key'
    },
    {
        emoji: '🗝',
        name: 'old_key'
    },
    {
        emoji: '🛋',
        name: 'couch_and_lamp'
    },
    {
        emoji: '🛌',
        name: 'sleeping_bed'
    },
    {
        emoji: '🛏',
        name: 'bed'
    },
    {
        emoji: '🚪',
        name: 'door'
    },
    {
        emoji: '🛎',
        name: 'bellhop_bell'
    },
    {
        emoji: '🖼',
        name: 'framed_picture'
    },
    {
        emoji: '🗺',
        name: 'world_map'
    },
    {
        emoji: '⛱',
        name: 'parasol_on_ground'
    },
    {
        emoji: '🗿',
        name: 'moyai'
    },
    {
        emoji: '🛍',
        name: 'shopping'
    },
    {
        emoji: '🛒',
        name: 'shopping_cart'
    },
    {
        emoji: '🎈',
        name: 'balloon'
    },
    {
        emoji: '🎏',
        name: 'flags'
    },
    {
        emoji: '🎀',
        name: 'ribbon'
    },
    {
        emoji: '🎁',
        name: 'gift'
    },
    {
        emoji: '🎊',
        name: 'confetti_ball'
    },
    {
        emoji: '🎉',
        name: 'tada'
    },
    {
        emoji: '🎎',
        name: 'dolls'
    },
    {
        emoji: '🎐',
        name: 'wind_chime'
    },
    {
        emoji: '🎌',
        name: 'crossed_flags'
    },
    {
        emoji: '🏮',
        name: 'izakaya_lantern'
    },
    {
        emoji: '✉️',
        name: 'email'
    },
    {
        emoji: '📩',
        name: 'envelope_with_arrow'
    },
    {
        emoji: '📨',
        name: 'incoming_envelope'
    },
    {
        emoji: '📧',
        name: 'e_mail'
    },
    {
        emoji: '💌',
        name: 'love_letter'
    },
    {
        emoji: '📮',
        name: 'postbox'
    },
    {
        emoji: '📪',
        name: 'mailbox_closed'
    },
    {
        emoji: '📫',
        name: 'mailbox'
    },
    {
        emoji: '📬',
        name: 'mailbox_with_mail'
    },
    {
        emoji: '📭',
        name: 'mailbox_with_no_mail'
    },
    {
        emoji: '📦',
        name: 'package'
    },
    {
        emoji: '📯',
        name: 'postal_horn'
    },
    {
        emoji: '📥',
        name: 'inbox_tray'
    },
    {
        emoji: '📤',
        name: 'outbox_tray'
    },
    {
        emoji: '📜',
        name: 'scroll'
    },
    {
        emoji: '📃',
        name: 'page_with_curl'
    },
    {
        emoji: '📑',
        name: 'bookmark_tabs'
    },
    {
        emoji: '📊',
        name: 'bar_chart'
    },
    {
        emoji: '📈',
        name: 'chart_with_upwards_trend'
    },
    {
        emoji: '📉',
        name: 'chart_with_downwards_trend'
    },
    {
        emoji: '📄',
        name: 'page_facing_up'
    },
    {
        emoji: '📅',
        name: 'date'
    },
    {
        emoji: '📆',
        name: 'calendar'
    },
    {
        emoji: '🗓',
        name: 'spiral_calendar'
    },
    {
        emoji: '📇',
        name: 'card_index'
    },
    {
        emoji: '🗃',
        name: 'card_file_box'
    },
    {
        emoji: '🗳',
        name: 'ballot_box'
    },
    {
        emoji: '🗄',
        name: 'file_cabinet'
    },
    {
        emoji: '📋',
        name: 'clipboard'
    },
    {
        emoji: '🗒',
        name: 'spiral_notepad'
    },
    {
        emoji: '📁',
        name: 'file_folder'
    },
    {
        emoji: '📂',
        name: 'open_file_folder'
    },
    {
        emoji: '🗂',
        name: 'card_index_dividers'
    },
    {
        emoji: '🗞',
        name: 'newspaper_roll'
    },
    {
        emoji: '📰',
        name: 'newspaper'
    },
    {
        emoji: '📓',
        name: 'notebook'
    },
    {
        emoji: '📕',
        name: 'closed_book'
    },
    {
        emoji: '📗',
        name: 'green_book'
    },
    {
        emoji: '📘',
        name: 'blue_book'
    },
    {
        emoji: '📙',
        name: 'orange_book'
    },
    {
        emoji: '📔',
        name: 'notebook_with_decorative_cover'
    },
    {
        emoji: '📒',
        name: 'ledger'
    },
    {
        emoji: '📚',
        name: 'books'
    },
    {
        emoji: '📖',
        name: 'open_book'
    },
    {
        emoji: '🔗',
        name: 'link'
    },
    {
        emoji: '📎',
        name: 'paperclip'
    },
    {
        emoji: '🖇',
        name: 'paperclips'
    },
    {
        emoji: '✂️',
        name: 'scissors'
    },
    {
        emoji: '📐',
        name: 'triangular_ruler'
    },
    {
        emoji: '📏',
        name: 'straight_ruler'
    },
    {
        emoji: '📌',
        name: 'pushpin'
    },
    {
        emoji: '📍',
        name: 'round_pushpin'
    },
    {
        emoji: '🚩',
        name: 'triangular_flag_on_post'
    },
    {
        emoji: '🏳',
        name: 'white_flag'
    },
    {
        emoji: '🏴',
        name: 'black_flag'
    },
    {
        emoji: '🏳️‍🌈',
        name: 'rainbow_flag'
    },
    {
        emoji: '🔐',
        name: 'closed_lock_with_key'
    },
    {
        emoji: '🔒',
        name: 'lock'
    },
    {
        emoji: '🔓',
        name: 'unlock'
    },
    {
        emoji: '🔏',
        name: 'lock_with_ink_pen'
    },
    {
        emoji: '🖊',
        name: 'pen'
    },
    {
        emoji: '🖋',
        name: 'fountain_pen'
    },
    {
        emoji: '✒️',
        name: 'black_nib'
    },
    {
        emoji: '📝',
        name: 'memo'
    },
    {
        emoji: '✏️',
        name: 'pencil2'
    },
    {
        emoji: '🖍',
        name: 'crayon'
    },
    {
        emoji: '🖌',
        name: 'paintbrush'
    },
    {
        emoji: '🔍',
        name: 'mag'
    },
    {
        emoji: '🔎',
        name: 'mag_right'
    },
    {
        emoji: '❤️',
        name: 'heart'
    },
    {
        emoji: '💛',
        name: 'yellow_heart'
    },
    {
        emoji: '💚',
        name: 'green_heart'
    },
    {
        emoji: '💙',
        name: 'blue_heart'
    },
    {
        emoji: '💜',
        name: 'purple_heart'
    },
    {
        emoji: '🖤',
        name: 'black_heart'
    },
    {
        emoji: '💔',
        name: 'broken_heart'
    },
    {
        emoji: '❣',
        name: 'heavy_heart_exclamation'
    },
    {
        emoji: '💕',
        name: 'two_hearts'
    },
    {
        emoji: '💞',
        name: 'revolving_hearts'
    },
    {
        emoji: '💓',
        name: 'heartbeat'
    },
    {
        emoji: '💗',
        name: 'heartpulse'
    },
    {
        emoji: '💖',
        name: 'sparkling_heart'
    },
    {
        emoji: '💘',
        name: 'cupid'
    },
    {
        emoji: '💝',
        name: 'gift_heart'
    },
    {
        emoji: '💟',
        name: 'heart_decoration'
    },
    {
        emoji: '☮',
        name: 'peace_symbol'
    },
    {
        emoji: '✝',
        name: 'latin_cross'
    },
    {
        emoji: '☪',
        name: 'star_and_crescent'
    },
    {
        emoji: '🕉',
        name: 'om'
    },
    {
        emoji: '☸',
        name: 'wheel_of_dharma'
    },
    {
        emoji: '✡',
        name: 'star_of_david'
    },
    {
        emoji: '🔯',
        name: 'six_pointed_star'
    },
    {
        emoji: '🕎',
        name: 'menorah'
    },
    {
        emoji: '☯',
        name: 'yin_yang'
    },
    {
        emoji: '☦',
        name: 'orthodox_cross'
    },
    {
        emoji: '🛐',
        name: 'place_of_worship'
    },
    {
        emoji: '⛎',
        name: 'ophiuchus'
    },
    {
        emoji: '♈',
        name: 'aries'
    },
    {
        emoji: '♉',
        name: 'taurus'
    },
    {
        emoji: '♊',
        name: 'gemini'
    },
    {
        emoji: '♋',
        name: 'cancer'
    },
    {
        emoji: '♌',
        name: 'leo'
    },
    {
        emoji: '♍',
        name: 'virgo'
    },
    {
        emoji: '♎',
        name: 'libra'
    },
    {
        emoji: '♏',
        name: 'scorpius'
    },
    {
        emoji: '♐',
        name: 'sagittarius'
    },
    {
        emoji: '♑',
        name: 'capricorn'
    },
    {
        emoji: '♒',
        name: 'aquarius'
    },
    {
        emoji: '♓',
        name: 'pisces'
    },
    {
        emoji: '🆔',
        name: 'id'
    },
    {
        emoji: '⚛',
        name: 'atom_symbol'
    },
    {
        emoji: '🈳',
        name: 'u7a7a'
    },
    {
        emoji: '🈹',
        name: 'u5272'
    },
    {
        emoji: '☢',
        name: 'radioactive'
    },
    {
        emoji: '☣',
        name: 'biohazard'
    },
    {
        emoji: '📴',
        name: 'mobile_phone_off'
    },
    {
        emoji: '📳',
        name: 'vibration_mode'
    },
    {
        emoji: '🈶',
        name: 'u6709'
    },
    {
        emoji: '🈚',
        name: 'u7121'
    },
    {
        emoji: '🈸',
        name: 'u7533'
    },
    {
        emoji: '🈺',
        name: 'u55b6'
    },
    {
        emoji: '🈷️',
        name: 'u6708'
    },
    {
        emoji: '✴️',
        name: 'eight_pointed_black_star'
    },
    {
        emoji: '🆚',
        name: 'vs'
    },
    {
        emoji: '🉑',
        name: 'accept'
    },
    {
        emoji: '💮',
        name: 'white_flower'
    },
    {
        emoji: '🉐',
        name: 'ideograph_advantage'
    },
    {
        emoji: '㊙️',
        name: 'secret'
    },
    {
        emoji: '㊗️',
        name: 'congratulations'
    },
    {
        emoji: '🈴',
        name: 'u5408'
    },
    {
        emoji: '🈵',
        name: 'u6e80'
    },
    {
        emoji: '🈲',
        name: 'u7981'
    },
    {
        emoji: '🅰️',
        name: 'a'
    },
    {
        emoji: '🅱️',
        name: 'b'
    },
    {
        emoji: '🆎',
        name: 'ab'
    },
    {
        emoji: '🆑',
        name: 'cl'
    },
    {
        emoji: '🅾️',
        name: 'o2'
    },
    {
        emoji: '🆘',
        name: 'sos'
    },
    {
        emoji: '⛔',
        name: 'no_entry'
    },
    {
        emoji: '📛',
        name: 'name_badge'
    },
    {
        emoji: '🚫',
        name: 'no_entry_sign'
    },
    {
        emoji: '❌',
        name: 'x'
    },
    {
        emoji: '⭕',
        name: 'o'
    },
    {
        emoji: '🛑',
        name: 'stop_sign'
    },
    {
        emoji: '💢',
        name: 'anger'
    },
    {
        emoji: '♨️',
        name: 'hotsprings'
    },
    {
        emoji: '🚷',
        name: 'no_pedestrians'
    },
    {
        emoji: '🚯',
        name: 'do_not_litter'
    },
    {
        emoji: '🚳',
        name: 'no_bicycles'
    },
    {
        emoji: '🚱',
        name: 'non_potable_water'
    },
    {
        emoji: '🔞',
        name: 'underage'
    },
    {
        emoji: '📵',
        name: 'no_mobile_phones'
    },
    {
        emoji: '❗',
        name: 'exclamation'
    },
    {
        emoji: '❕',
        name: 'grey_exclamation'
    },
    {
        emoji: '❓',
        name: 'question'
    },
    {
        emoji: '❔',
        name: 'grey_question'
    },
    {
        emoji: '‼️',
        name: 'bangbang'
    },
    {
        emoji: '⁉️',
        name: 'interrobang'
    },
    {
        emoji: '🔅',
        name: 'low_brightness'
    },
    {
        emoji: '🔆',
        name: 'high_brightness'
    },
    {
        emoji: '🔱',
        name: 'trident'
    },
    {
        emoji: '⚜',
        name: 'fleur_de_lis'
    },
    {
        emoji: '〽️',
        name: 'part_alternation_mark'
    },
    {
        emoji: '⚠️',
        name: 'warning'
    },
    {
        emoji: '🚸',
        name: 'children_crossing'
    },
    {
        emoji: '🔰',
        name: 'beginner'
    },
    {
        emoji: '♻️',
        name: 'recycle'
    },
    {
        emoji: '🈯',
        name: 'u6307'
    },
    {
        emoji: '💹',
        name: 'chart'
    },
    {
        emoji: '❇️',
        name: 'sparkle'
    },
    {
        emoji: '✳️',
        name: 'eight_spoked_asterisk'
    },
    {
        emoji: '❎',
        name: 'negative_squared_cross_mark'
    },
    {
        emoji: '✅',
        name: 'white_check_mark'
    },
    {
        emoji: '💠',
        name: 'diamond_shape_with_a_dot_inside'
    },
    {
        emoji: '🌀',
        name: 'cyclone'
    },
    {
        emoji: '➿',
        name: 'loop'
    },
    {
        emoji: '🌐',
        name: 'globe_with_meridians'
    },
    {
        emoji: 'Ⓜ️',
        name: 'm'
    },
    {
        emoji: '🏧',
        name: 'atm'
    },
    {
        emoji: '🈂️',
        name: 'sa'
    },
    {
        emoji: '🛂',
        name: 'passport_control'
    },
    {
        emoji: '🛃',
        name: 'customs'
    },
    {
        emoji: '🛄',
        name: 'baggage_claim'
    },
    {
        emoji: '🛅',
        name: 'left_luggage'
    },
    {
        emoji: '♿',
        name: 'wheelchair'
    },
    {
        emoji: '🚭',
        name: 'no_smoking'
    },
    {
        emoji: '🚾',
        name: 'wc'
    },
    {
        emoji: '🅿️',
        name: 'parking'
    },
    {
        emoji: '🚰',
        name: 'potable_water'
    },
    {
        emoji: '🚹',
        name: 'mens'
    },
    {
        emoji: '🚺',
        name: 'womens'
    },
    {
        emoji: '🚼',
        name: 'baby_symbol'
    },
    {
        emoji: '🚻',
        name: 'restroom'
    },
    {
        emoji: '🚮',
        name: 'put_litter_in_its_place'
    },
    {
        emoji: '🎦',
        name: 'cinema'
    },
    {
        emoji: '📶',
        name: 'signal_strength'
    },
    {
        emoji: '🈁',
        name: 'koko'
    },
    {
        emoji: '🆖',
        name: 'ng'
    },
    {
        emoji: '🆗',
        name: 'ok'
    },
    {
        emoji: '🆙',
        name: 'up'
    },
    {
        emoji: '🆒',
        name: 'cool'
    },
    {
        emoji: '🆕',
        name: 'new'
    },
    {
        emoji: '🆓',
        name: 'free'
    },
    {
        emoji: '0️⃣',
        name: 'zero'
    },
    {
        emoji: '1️⃣',
        name: 'one'
    },
    {
        emoji: '2️⃣',
        name: 'two'
    },
    {
        emoji: '3️⃣',
        name: 'three'
    },
    {
        emoji: '4️⃣',
        name: 'four'
    },
    {
        emoji: '5️⃣',
        name: 'five'
    },
    {
        emoji: '6️⃣',
        name: 'six'
    },
    {
        emoji: '7️⃣',
        name: 'seven'
    },
    {
        emoji: '8️⃣',
        name: 'eight'
    },
    {
        emoji: '9️⃣',
        name: 'nine'
    },
    {
        emoji: '🔟',
        name: 'keycap_ten'
    },
    {
        emoji: '*⃣',
        name: 'asterisk'
    },
    {
        emoji: '▶️',
        name: 'arrow_forward'
    },
    {
        emoji: '⏸',
        name: 'pause_button'
    },
    {
        emoji: '⏭',
        name: 'next_track_button'
    },
    {
        emoji: '⏹',
        name: 'stop_button'
    },
    {
        emoji: '⏺',
        name: 'record_button'
    },
    {
        emoji: '⏯',
        name: 'play_or_pause_button'
    },
    {
        emoji: '⏮',
        name: 'previous_track_button'
    },
    {
        emoji: '⏩',
        name: 'fast_forward'
    },
    {
        emoji: '⏪',
        name: 'rewind'
    },
    {
        emoji: '🔀',
        name: 'twisted_rightwards_arrows'
    },
    {
        emoji: '🔁',
        name: 'repeat'
    },
    {
        emoji: '🔂',
        name: 'repeat_one'
    },
    {
        emoji: '◀️',
        name: 'arrow_backward'
    },
    {
        emoji: '🔼',
        name: 'arrow_up_small'
    },
    {
        emoji: '🔽',
        name: 'arrow_down_small'
    },
    {
        emoji: '⏫',
        name: 'arrow_double_up'
    },
    {
        emoji: '⏬',
        name: 'arrow_double_down'
    },
    {
        emoji: '➡️',
        name: 'arrow_right'
    },
    {
        emoji: '⬅️',
        name: 'arrow_left'
    },
    {
        emoji: '⬆️',
        name: 'arrow_up'
    },
    {
        emoji: '⬇️',
        name: 'arrow_down'
    },
    {
        emoji: '↗️',
        name: 'arrow_upper_right'
    },
    {
        emoji: '↘️',
        name: 'arrow_lower_right'
    },
    {
        emoji: '↙️',
        name: 'arrow_lower_left'
    },
    {
        emoji: '↖️',
        name: 'arrow_upper_left'
    },
    {
        emoji: '↕️',
        name: 'arrow_up_down'
    },
    {
        emoji: '↔️',
        name: 'left_right_arrow'
    },
    {
        emoji: '🔄',
        name: 'arrows_counterclockwise'
    },
    {
        emoji: '↪️',
        name: 'arrow_right_hook'
    },
    {
        emoji: '↩️',
        name: 'leftwards_arrow_with_hook'
    },
    {
        emoji: '⤴️',
        name: 'arrow_heading_up'
    },
    {
        emoji: '⤵️',
        name: 'arrow_heading_down'
    },
    {
        emoji: '#️⃣',
        name: 'hash'
    },
    {
        emoji: 'ℹ️',
        name: 'information_source'
    },
    {
        emoji: '🔤',
        name: 'abc'
    },
    {
        emoji: '🔡',
        name: 'abcd'
    },
    {
        emoji: '🔠',
        name: 'capital_abcd'
    },
    {
        emoji: '🔣',
        name: 'symbols'
    },
    {
        emoji: '🎵',
        name: 'musical_note'
    },
    {
        emoji: '🎶',
        name: 'notes'
    },
    {
        emoji: '〰️',
        name: 'wavy_dash'
    },
    {
        emoji: '➰',
        name: 'curly_loop'
    },
    {
        emoji: '✔️',
        name: 'heavy_check_mark'
    },
    {
        emoji: '🔃',
        name: 'arrows_clockwise'
    },
    {
        emoji: '➕',
        name: 'heavy_plus_sign'
    },
    {
        emoji: '➖',
        name: 'heavy_minus_sign'
    },
    {
        emoji: '➗',
        name: 'heavy_division_sign'
    },
    {
        emoji: '✖️',
        name: 'heavy_multiplication_x'
    },
    {
        emoji: '💲',
        name: 'heavy_dollar_sign'
    },
    {
        emoji: '💱',
        name: 'currency_exchange'
    },
    {
        emoji: '©️',
        name: 'copyright'
    },
    {
        emoji: '®️',
        name: 'registered'
    },
    {
        emoji: '™️',
        name: 'tm'
    },
    {
        emoji: '🔚',
        name: 'end'
    },
    {
        emoji: '🔙',
        name: 'back'
    },
    {
        emoji: '🔛',
        name: 'on'
    },
    {
        emoji: '🔝',
        name: 'top'
    },
    {
        emoji: '🔜',
        name: 'soon'
    },
    {
        emoji: '☑️',
        name: 'ballot_box_with_check'
    },
    {
        emoji: '🔘',
        name: 'radio_button'
    },
    {
        emoji: '⚪',
        name: 'white_circle'
    },
    {
        emoji: '⚫',
        name: 'black_circle'
    },
    {
        emoji: '🔴',
        name: 'red_circle'
    },
    {
        emoji: '🔵',
        name: 'large_blue_circle'
    },
    {
        emoji: '🔸',
        name: 'small_orange_diamond'
    },
    {
        emoji: '🔹',
        name: 'small_blue_diamond'
    },
    {
        emoji: '🔶',
        name: 'large_orange_diamond'
    },
    {
        emoji: '🔷',
        name: 'large_blue_diamond'
    },
    {
        emoji: '🔺',
        name: 'small_red_triangle'
    },
    {
        emoji: '▪️',
        name: 'black_small_square'
    },
    {
        emoji: '▫️',
        name: 'white_small_square'
    },
    {
        emoji: '⬛',
        name: 'black_large_square'
    },
    {
        emoji: '⬜',
        name: 'white_large_square'
    },
    {
        emoji: '🔻',
        name: 'small_red_triangle_down'
    },
    {
        emoji: '◼️',
        name: 'black_medium_square'
    },
    {
        emoji: '◻️',
        name: 'white_medium_square'
    },
    {
        emoji: '◾',
        name: 'black_medium_small_square'
    },
    {
        emoji: '◽',
        name: 'white_medium_small_square'
    },
    {
        emoji: '🔲',
        name: 'black_square_button'
    },
    {
        emoji: '🔳',
        name: 'white_square_button'
    },
    {
        emoji: '🔈',
        name: 'speaker'
    },
    {
        emoji: '🔉',
        name: 'sound'
    },
    {
        emoji: '🔊',
        name: 'loud_sound'
    },
    {
        emoji: '🔇',
        name: 'mute'
    },
    {
        emoji: '📣',
        name: 'mega'
    },
    {
        emoji: '📢',
        name: 'loudspeaker'
    },
    {
        emoji: '🔔',
        name: 'bell'
    },
    {
        emoji: '🔕',
        name: 'no_bell'
    },
    {
        emoji: '🃏',
        name: 'black_joker'
    },
    {
        emoji: '🀄',
        name: 'mahjong'
    },
    {
        emoji: '♠️',
        name: 'spades'
    },
    {
        emoji: '♣️',
        name: 'clubs'
    },
    {
        emoji: '♥️',
        name: 'hearts'
    },
    {
        emoji: '♦️',
        name: 'diamonds'
    },
    {
        emoji: '🎴',
        name: 'flower_playing_cards'
    },
    {
        emoji: '💭',
        name: 'thought_balloon'
    },
    {
        emoji: '🗯',
        name: 'right_anger_bubble'
    },
    {
        emoji: '💬',
        name: 'speech_balloon'
    },
    {
        emoji: '🗨',
        name: 'left_speech_bubble'
    },
    {
        emoji: '🕐',
        name: 'clock1'
    },
    {
        emoji: '🕑',
        name: 'clock2'
    },
    {
        emoji: '🕒',
        name: 'clock3'
    },
    {
        emoji: '🕓',
        name: 'clock4'
    },
    {
        emoji: '🕔',
        name: 'clock5'
    },
    {
        emoji: '🕕',
        name: 'clock6'
    },
    {
        emoji: '🕖',
        name: 'clock7'
    },
    {
        emoji: '🕗',
        name: 'clock8'
    },
    {
        emoji: '🕘',
        name: 'clock9'
    },
    {
        emoji: '🕙',
        name: 'clock10'
    },
    {
        emoji: '🕚',
        name: 'clock11'
    },
    {
        emoji: '🕛',
        name: 'clock12'
    },
    {
        emoji: '🕜',
        name: 'clock130'
    },
    {
        emoji: '🕝',
        name: 'clock230'
    },
    {
        emoji: '🕞',
        name: 'clock330'
    },
    {
        emoji: '🕟',
        name: 'clock430'
    },
    {
        emoji: '🕠',
        name: 'clock530'
    },
    {
        emoji: '🕡',
        name: 'clock630'
    },
    {
        emoji: '🕢',
        name: 'clock730'
    },
    {
        emoji: '🕣',
        name: 'clock830'
    },
    {
        emoji: '🕤',
        name: 'clock930'
    },
    {
        emoji: '🕥',
        name: 'clock1030'
    },
    {
        emoji: '🕦',
        name: 'clock1130'
    },
    {
        emoji: '🕧',
        name: 'clock1230'
    },
    {
        emoji: '🇦🇫',
        name: 'afghanistan'
    },
    {
        emoji: '🇦🇽',
        name: 'aland_islands'
    },
    {
        emoji: '🇦🇱',
        name: 'albania'
    },
    {
        emoji: '🇩🇿',
        name: 'algeria'
    },
    {
        emoji: '🇦🇸',
        name: 'american_samoa'
    },
    {
        emoji: '🇦🇩',
        name: 'andorra'
    },
    {
        emoji: '🇦🇴',
        name: 'angola'
    },
    {
        emoji: '🇦🇮',
        name: 'anguilla'
    },
    {
        emoji: '🇦🇶',
        name: 'antarctica'
    },
    {
        emoji: '🇦🇬',
        name: 'antigua_barbuda'
    },
    {
        emoji: '🇦🇷',
        name: 'argentina'
    },
    {
        emoji: '🇦🇲',
        name: 'armenia'
    },
    {
        emoji: '🇦🇼',
        name: 'aruba'
    },
    {
        emoji: '🇦🇺',
        name: 'australia'
    },
    {
        emoji: '🇦🇹',
        name: 'austria'
    },
    {
        emoji: '🇦🇿',
        name: 'azerbaijan'
    },
    {
        emoji: '🇧🇸',
        name: 'bahamas'
    },
    {
        emoji: '🇧🇭',
        name: 'bahrain'
    },
    {
        emoji: '🇧🇩',
        name: 'bangladesh'
    },
    {
        emoji: '🇧🇧',
        name: 'barbados'
    },
    {
        emoji: '🇧🇾',
        name: 'belarus'
    },
    {
        emoji: '🇧🇪',
        name: 'belgium'
    },
    {
        emoji: '🇧🇿',
        name: 'belize'
    },
    {
        emoji: '🇧🇯',
        name: 'benin'
    },
    {
        emoji: '🇧🇲',
        name: 'bermuda'
    },
    {
        emoji: '🇧🇹',
        name: 'bhutan'
    },
    {
        emoji: '🇧🇴',
        name: 'bolivia'
    },
    {
        emoji: '🇧🇶',
        name: 'caribbean_netherlands'
    },
    {
        emoji: '🇧🇦',
        name: 'bosnia_herzegovina'
    },
    {
        emoji: '🇧🇼',
        name: 'botswana'
    },
    {
        emoji: '🇧🇷',
        name: 'brazil'
    },
    {
        emoji: '🇮🇴',
        name: 'british_indian_ocean_territory'
    },
    {
        emoji: '🇻🇬',
        name: 'british_virgin_islands'
    },
    {
        emoji: '🇧🇳',
        name: 'brunei'
    },
    {
        emoji: '🇧🇬',
        name: 'bulgaria'
    },
    {
        emoji: '🇧🇫',
        name: 'burkina_faso'
    },
    {
        emoji: '🇧🇮',
        name: 'burundi'
    },
    {
        emoji: '🇨🇻',
        name: 'cape_verde'
    },
    {
        emoji: '🇰🇭',
        name: 'cambodia'
    },
    {
        emoji: '🇨🇲',
        name: 'cameroon'
    },
    {
        emoji: '🇨🇦',
        name: 'canada'
    },
    {
        emoji: '🇮🇨',
        name: 'canary_islands'
    },
    {
        emoji: '🇰🇾',
        name: 'cayman_islands'
    },
    {
        emoji: '🇨🇫',
        name: 'central_african_republic'
    },
    {
        emoji: '🇹🇩',
        name: 'chad'
    },
    {
        emoji: '🇨🇱',
        name: 'chile'
    },
    {
        emoji: '🇨🇳',
        name: 'cn'
    },
    {
        emoji: '🇨🇽',
        name: 'christmas_island'
    },
    {
        emoji: '🇨🇨',
        name: 'cocos_islands'
    },
    {
        emoji: '🇨🇴',
        name: 'colombia'
    },
    {
        emoji: '🇰🇲',
        name: 'comoros'
    },
    {
        emoji: '🇨🇬',
        name: 'congo_brazzaville'
    },
    {
        emoji: '🇨🇩',
        name: 'congo_kinshasa'
    },
    {
        emoji: '🇨🇰',
        name: 'cook_islands'
    },
    {
        emoji: '🇨🇷',
        name: 'costa_rica'
    },
    {
        emoji: '🇭🇷',
        name: 'croatia'
    },
    {
        emoji: '🇨🇺',
        name: 'cuba'
    },
    {
        emoji: '🇨🇼',
        name: 'curacao'
    },
    {
        emoji: '🇨🇾',
        name: 'cyprus'
    },
    {
        emoji: '🇨🇿',
        name: 'czech_republic'
    },
    {
        emoji: '🇩🇰',
        name: 'denmark'
    },
    {
        emoji: '🇩🇯',
        name: 'djibouti'
    },
    {
        emoji: '🇩🇲',
        name: 'dominica'
    },
    {
        emoji: '🇩🇴',
        name: 'dominican_republic'
    },
    {
        emoji: '🇪🇨',
        name: 'ecuador'
    },
    {
        emoji: '🇪🇬',
        name: 'egypt'
    },
    {
        emoji: '🇸🇻',
        name: 'el_salvador'
    },
    {
        emoji: '🇬🇶',
        name: 'equatorial_guinea'
    },
    {
        emoji: '🇪🇷',
        name: 'eritrea'
    },
    {
        emoji: '🇪🇪',
        name: 'estonia'
    },
    {
        emoji: '🇪🇹',
        name: 'ethiopia'
    },
    {
        emoji: '🇪🇺',
        name: 'eu'
    },
    {
        emoji: '🇫🇰',
        name: 'falkland_islands'
    },
    {
        emoji: '🇫🇴',
        name: 'faroe_islands'
    },
    {
        emoji: '🇫🇯',
        name: 'fiji'
    },
    {
        emoji: '🇫🇮',
        name: 'finland'
    },
    {
        emoji: '🇫🇷',
        name: 'fr'
    },
    {
        emoji: '🇬🇫',
        name: 'french_guiana'
    },
    {
        emoji: '🇵🇫',
        name: 'french_polynesia'
    },
    {
        emoji: '🇹🇫',
        name: 'french_southern_territories'
    },
    {
        emoji: '🇬🇦',
        name: 'gabon'
    },
    {
        emoji: '🇬🇲',
        name: 'gambia'
    },
    {
        emoji: '🇬🇪',
        name: 'georgia'
    },
    {
        emoji: '🇩🇪',
        name: 'de'
    },
    {
        emoji: '🇬🇭',
        name: 'ghana'
    },
    {
        emoji: '🇬🇮',
        name: 'gibraltar'
    },
    {
        emoji: '🇬🇷',
        name: 'greece'
    },
    {
        emoji: '🇬🇱',
        name: 'greenland'
    },
    {
        emoji: '🇬🇩',
        name: 'grenada'
    },
    {
        emoji: '🇬🇵',
        name: 'guadeloupe'
    },
    {
        emoji: '🇬🇺',
        name: 'guam'
    },
    {
        emoji: '🇬🇹',
        name: 'guatemala'
    },
    {
        emoji: '🇬🇬',
        name: 'guernsey'
    },
    {
        emoji: '🇬🇳',
        name: 'guinea'
    },
    {
        emoji: '🇬🇼',
        name: 'guinea_bissau'
    },
    {
        emoji: '🇬🇾',
        name: 'guyana'
    },
    {
        emoji: '🇭🇹',
        name: 'haiti'
    },
    {
        emoji: '🇭🇳',
        name: 'honduras'
    },
    {
        emoji: '🇭🇰',
        name: 'hong_kong'
    },
    {
        emoji: '🇭🇺',
        name: 'hungary'
    },
    {
        emoji: '🇮🇸',
        name: 'iceland'
    },
    {
        emoji: '🇮🇳',
        name: 'india'
    },
    {
        emoji: '🇮🇩',
        name: 'indonesia'
    },
    {
        emoji: '🇮🇷',
        name: 'iran'
    },
    {
        emoji: '🇮🇶',
        name: 'iraq'
    },
    {
        emoji: '🇮🇪',
        name: 'ireland'
    },
    {
        emoji: '🇮🇲',
        name: 'isle_of_man'
    },
    {
        emoji: '🇮🇱',
        name: 'israel'
    },
    {
        emoji: '🇮🇹',
        name: 'it'
    },
    {
        emoji: '🇨🇮',
        name: 'cote_divoire'
    },
    {
        emoji: '🇯🇲',
        name: 'jamaica'
    },
    {
        emoji: '🇯🇵',
        name: 'jp'
    },
    {
        emoji: '🇯🇪',
        name: 'jersey'
    },
    {
        emoji: '🇯🇴',
        name: 'jordan'
    },
    {
        emoji: '🇰🇿',
        name: 'kazakhstan'
    },
    {
        emoji: '🇰🇪',
        name: 'kenya'
    },
    {
        emoji: '🇰🇮',
        name: 'kiribati'
    },
    {
        emoji: '🇽🇰',
        name: 'kosovo'
    },
    {
        emoji: '🇰🇼',
        name: 'kuwait'
    },
    {
        emoji: '🇰🇬',
        name: 'kyrgyzstan'
    },
    {
        emoji: '🇱🇦',
        name: 'laos'
    },
    {
        emoji: '🇱🇻',
        name: 'latvia'
    },
    {
        emoji: '🇱🇧',
        name: 'lebanon'
    },
    {
        emoji: '🇱🇸',
        name: 'lesotho'
    },
    {
        emoji: '🇱🇷',
        name: 'liberia'
    },
    {
        emoji: '🇱🇾',
        name: 'libya'
    },
    {
        emoji: '🇱🇮',
        name: 'liechtenstein'
    },
    {
        emoji: '🇱🇹',
        name: 'lithuania'
    },
    {
        emoji: '🇱🇺',
        name: 'luxembourg'
    },
    {
        emoji: '🇲🇴',
        name: 'macau'
    },
    {
        emoji: '🇲🇰',
        name: 'macedonia'
    },
    {
        emoji: '🇲🇬',
        name: 'madagascar'
    },
    {
        emoji: '🇲🇼',
        name: 'malawi'
    },
    {
        emoji: '🇲🇾',
        name: 'malaysia'
    },
    {
        emoji: '🇲🇻',
        name: 'maldives'
    },
    {
        emoji: '🇲🇱',
        name: 'mali'
    },
    {
        emoji: '🇲🇹',
        name: 'malta'
    },
    {
        emoji: '🇲🇭',
        name: 'marshall_islands'
    },
    {
        emoji: '🇲🇶',
        name: 'martinique'
    },
    {
        emoji: '🇲🇷',
        name: 'mauritania'
    },
    {
        emoji: '🇲🇺',
        name: 'mauritius'
    },
    {
        emoji: '🇾🇹',
        name: 'mayotte'
    },
    {
        emoji: '🇲🇽',
        name: 'mexico'
    },
    {
        emoji: '🇫🇲',
        name: 'micronesia'
    },
    {
        emoji: '🇲🇩',
        name: 'moldova'
    },
    {
        emoji: '🇲🇨',
        name: 'monaco'
    },
    {
        emoji: '🇲🇳',
        name: 'mongolia'
    },
    {
        emoji: '🇲🇪',
        name: 'montenegro'
    },
    {
        emoji: '🇲🇸',
        name: 'montserrat'
    },
    {
        emoji: '🇲🇦',
        name: 'morocco'
    },
    {
        emoji: '🇲🇿',
        name: 'mozambique'
    },
    {
        emoji: '🇲🇲',
        name: 'myanmar'
    },
    {
        emoji: '🇳🇦',
        name: 'namibia'
    },
    {
        emoji: '🇳🇷',
        name: 'nauru'
    },
    {
        emoji: '🇳🇵',
        name: 'nepal'
    },
    {
        emoji: '🇳🇱',
        name: 'netherlands'
    },
    {
        emoji: '🇳🇨',
        name: 'new_caledonia'
    },
    {
        emoji: '🇳🇿',
        name: 'new_zealand'
    },
    {
        emoji: '🇳🇮',
        name: 'nicaragua'
    },
    {
        emoji: '🇳🇪',
        name: 'niger'
    },
    {
        emoji: '🇳🇬',
        name: 'nigeria'
    },
    {
        emoji: '🇳🇺',
        name: 'niue'
    },
    {
        emoji: '🇳🇫',
        name: 'norfolk_island'
    },
    {
        emoji: '🇲🇵',
        name: 'northern_mariana_islands'
    },
    {
        emoji: '🇰🇵',
        name: 'north_korea'
    },
    {
        emoji: '🇳🇴',
        name: 'norway'
    },
    {
        emoji: '🇴🇲',
        name: 'oman'
    },
    {
        emoji: '🇵🇰',
        name: 'pakistan'
    },
    {
        emoji: '🇵🇼',
        name: 'palau'
    },
    {
        emoji: '🇵🇸',
        name: 'palestinian_territories'
    },
    {
        emoji: '🇵🇦',
        name: 'panama'
    },
    {
        emoji: '🇵🇬',
        name: 'papua_new_guinea'
    },
    {
        emoji: '🇵🇾',
        name: 'paraguay'
    },
    {
        emoji: '🇵🇪',
        name: 'peru'
    },
    {
        emoji: '🇵🇭',
        name: 'philippines'
    },
    {
        emoji: '🇵🇳',
        name: 'pitcairn_islands'
    },
    {
        emoji: '🇵🇱',
        name: 'poland'
    },
    {
        emoji: '🇵🇹',
        name: 'portugal'
    },
    {
        emoji: '🇵🇷',
        name: 'puerto_rico'
    },
    {
        emoji: '🇶🇦',
        name: 'qatar'
    },
    {
        emoji: '🇷🇪',
        name: 'reunion'
    },
    {
        emoji: '🇷🇴',
        name: 'romania'
    },
    {
        emoji: '🇷🇺',
        name: 'ru'
    },
    {
        emoji: '🇷🇼',
        name: 'rwanda'
    },
    {
        emoji: '🇧🇱',
        name: 'st_barthelemy'
    },
    {
        emoji: '🇸🇭',
        name: 'st_helena'
    },
    {
        emoji: '🇰🇳',
        name: 'st_kitts_nevis'
    },
    {
        emoji: '🇱🇨',
        name: 'st_lucia'
    },
    {
        emoji: '🇵🇲',
        name: 'st_pierre_miquelon'
    },
    {
        emoji: '🇻🇨',
        name: 'st_vincent_grenadines'
    },
    {
        emoji: '🇼🇸',
        name: 'samoa'
    },
    {
        emoji: '🇸🇲',
        name: 'san_marino'
    },
    {
        emoji: '🇸🇹',
        name: 'sao_tome_principe'
    },
    {
        emoji: '🇸🇦',
        name: 'saudi_arabia'
    },
    {
        emoji: '🇸🇳',
        name: 'senegal'
    },
    {
        emoji: '🇷🇸',
        name: 'serbia'
    },
    {
        emoji: '🇸🇨',
        name: 'seychelles'
    },
    {
        emoji: '🇸🇱',
        name: 'sierra_leone'
    },
    {
        emoji: '🇸🇬',
        name: 'singapore'
    },
    {
        emoji: '🇸🇽',
        name: 'sint_maarten'
    },
    {
        emoji: '🇸🇰',
        name: 'slovakia'
    },
    {
        emoji: '🇸🇮',
        name: 'slovenia'
    },
    {
        emoji: '🇸🇧',
        name: 'solomon_islands'
    },
    {
        emoji: '🇸🇴',
        name: 'somalia'
    },
    {
        emoji: '🇿🇦',
        name: 'south_africa'
    },
    {
        emoji: '🇬🇸',
        name: 'south_georgia_south_sandwich_islands'
    },
    {
        emoji: '🇰🇷',
        name: 'kr'
    },
    {
        emoji: '🇸🇸',
        name: 'south_sudan'
    },
    {
        emoji: '🇪🇸',
        name: 'es'
    },
    {
        emoji: '🇱🇰',
        name: 'sri_lanka'
    },
    {
        emoji: '🇸🇩',
        name: 'sudan'
    },
    {
        emoji: '🇸🇷',
        name: 'suriname'
    },
    {
        emoji: '🇸🇿',
        name: 'swaziland'
    },
    {
        emoji: '🇸🇪',
        name: 'sweden'
    },
    {
        emoji: '🇨🇭',
        name: 'switzerland'
    },
    {
        emoji: '🇸🇾',
        name: 'syria'
    },
    {
        emoji: '🇹🇼',
        name: 'taiwan'
    },
    {
        emoji: '🇹🇯',
        name: 'tajikistan'
    },
    {
        emoji: '🇹🇿',
        name: 'tanzania'
    },
    {
        emoji: '🇹🇭',
        name: 'thailand'
    },
    {
        emoji: '🇹🇱',
        name: 'timor_leste'
    },
    {
        emoji: '🇹🇬',
        name: 'togo'
    },
    {
        emoji: '🇹🇰',
        name: 'tokelau'
    },
    {
        emoji: '🇹🇴',
        name: 'tonga'
    },
    {
        emoji: '🇹🇹',
        name: 'trinidad_tobago'
    },
    {
        emoji: '🇹🇳',
        name: 'tunisia'
    },
    {
        emoji: '🇹🇷',
        name: 'tr'
    },
    {
        emoji: '🇹🇲',
        name: 'turkmenistan'
    },
    {
        emoji: '🇹🇨',
        name: 'turks_caicos_islands'
    },
    {
        emoji: '🇹🇻',
        name: 'tuvalu'
    },
    {
        emoji: '🇺🇬',
        name: 'uganda'
    },
    {
        emoji: '🇺🇦',
        name: 'ukraine'
    },
    {
        emoji: '🇦🇪',
        name: 'united_arab_emirates'
    },
    {
        emoji: '🇬🇧',
        name: 'uk'
    },
    {
        emoji: '🇺🇸',
        name: 'us'
    },
    {
        emoji: '🇻🇮',
        name: 'us_virgin_islands'
    },
    {
        emoji: '🇺🇾',
        name: 'uruguay'
    },
    {
        emoji: '🇺🇿',
        name: 'uzbekistan'
    },
    {
        emoji: '🇻🇺',
        name: 'vanuatu'
    },
    {
        emoji: '🇻🇦',
        name: 'vatican_city'
    },
    {
        emoji: '🇻🇪',
        name: 'venezuela'
    },
    {
        emoji: '🇻🇳',
        name: 'vietnam'
    },
    {
        emoji: '🇼🇫',
        name: 'wallis_futuna'
    },
    {
        emoji: '🇪🇭',
        name: 'western_sahara'
    },
    {
        emoji: '🇾🇪',
        name: 'yemen'
    },
    {
        emoji: '🇿🇲',
        name: 'zambia'
    },
    {
        emoji: '🇿🇼',
        name: 'zimbabwe'
    }, 
];
let $dfe731a04a9a6860$export$ecf39af1905170bc = [
    [
        '💥',
        '⭐',
        '🌟',
        '◼️'
    ],
    [
        '🌕',
        '🌔',
        '🌓',
        '🌒'
    ],
    [
        '🌑',
        '🌘',
        '🌗',
        '🌖'
    ], 
];
let $dfe731a04a9a6860$export$22c92f729629a5e2 = [
    [
        '💜',
        '💛',
        '💚',
        '💙',
        '🖤',
        '💔'
    ],
    [
        '❤',
        '♥',
        '❣',
        '😻',
        '👩‍❤️‍👩',
        '👨‍❤️‍👨'
    ],
    [
        '💗',
        '💖',
        '💕',
        '💑',
        '💓',
        '💞',
        '💟'
    ], 
];
var $dfe731a04a9a6860$export$9099ad97b570f7c = (name)=>{
    let all = false;
    switch(name){
        case 'all':
            all = true;
            break;
        case 'hearts':
            return $dfe731a04a9a6860$export$22c92f729629a5e2;
        case 'moon':
            return $dfe731a04a9a6860$export$ecf39af1905170bc;
        default:
            for(let key in $dfe731a04a9a6860$var$emojiMap){
                // console.log('~~~~~~~~>>>~~~~~~~',emojiMap[key], emojiMap[key]['name'])
                if (name === $dfe731a04a9a6860$var$emojiMap[key]['name']) return $dfe731a04a9a6860$var$emojiMap[key]['emoji'];
            }
            break;
    }
    if (all) return $dfe731a04a9a6860$var$emojiMap;
};
$dfe731a04a9a6860$var$emojiMap.forEach(({ emoji: emoji , name: name  })=>{
    console[name] = console.log.bind(console, `${emoji} `);
});


let $adbadf3fc7998dca$var$source = {
};
let $adbadf3fc7998dca$var$target = {
};
let $adbadf3fc7998dca$var$remove = {
};
$adbadf3fc7998dca$var$remove.staticProperty = {
};
$adbadf3fc7998dca$var$source.staticProperty = {
};
$adbadf3fc7998dca$var$target.staticProperty = {
};
$adbadf3fc7998dca$var$remove.staticProperty = {
};
$adbadf3fc7998dca$var$target.staticProperty = new Proxy({
}, {
    get: (obj, prop)=>{
        return obj[prop];
    },
    set: (obj, prop, value)=>{
        if ($1b18bf45954afeed$export$9099ad97b570f7c(obj[prop])) obj[prop] = [];
        obj[prop].push(value);
        return true;
    }
});
$adbadf3fc7998dca$var$source.staticProperty = new Proxy({
}, {
    get: (obj, prop)=>{
        return obj[prop];
    },
    set: (obj, prop, value)=>{
        if ($1b18bf45954afeed$export$9099ad97b570f7c(obj[prop])) obj[prop] = [];
        obj[prop].push(value);
        return true;
    }
});
let $adbadf3fc7998dca$var$list = ()=>{
    return new Promise((resolve, reject)=>{
        try {
            resolve({
                status: 'ok',
                success: true,
                message: {
                    target: $adbadf3fc7998dca$var$target.staticProperty,
                    source: $adbadf3fc7998dca$var$source.staticProperty,
                    remove: $adbadf3fc7998dca$var$remove.staticProperty
                }
            });
        } catch (e) {
            resolve({
                status: 'false',
                success: false,
                message: e
            });
        }
    });
};
let $adbadf3fc7998dca$var$close = (task)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            $1b18bf45954afeed$export$9099ad97b570f7c($adbadf3fc7998dca$var$source.staticProperty[`${task}`]) ? delete $adbadf3fc7998dca$var$target.staticProperty[`${task}`] : $adbadf3fc7998dca$var$remove.staticProperty[`${task}`] = true;
            resolve({
                status: 'ok',
                success: true,
                message: ''
            });
        } catch (e) {
            resolve({
                status: 'not ok',
                success: false,
                message: e
            });
        }
    });
};
let $adbadf3fc7998dca$var$wait = (task, call)=>{
    return new Promise(async (resolve, reject)=>{
        try {
            if (!$1b18bf45954afeed$export$9099ad97b570f7c($adbadf3fc7998dca$var$target.staticProperty[`${task}`])) {
                $adbadf3fc7998dca$var$target.staticProperty[`${task}`] = {
                    call: call
                };
                resolve(true);
            } else if ($1b18bf45954afeed$export$9099ad97b570f7c($adbadf3fc7998dca$var$source.staticProperty[`${task}`])) {
                $adbadf3fc7998dca$var$target.staticProperty[`${task}`] = {
                    call: call
                };
                resolve(true);
            } else {
                console.log(`  ${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[2][1]}`, $adbadf3fc7998dca$var$source.staticProperty[`${task}`][0]['task']);
                $adbadf3fc7998dca$var$target.staticProperty[`${task}`] = {
                    call: call
                };
                let item = $adbadf3fc7998dca$var$target.staticProperty[`${task}`];
                while(!$1b18bf45954afeed$export$9099ad97b570f7c($adbadf3fc7998dca$var$source.staticProperty[`${task}`][0])){
                    for(let i = 0; i < item.length; i++)await item[i].call({
                        message: $adbadf3fc7998dca$var$source.staticProperty[`${task}`][0]['message'],
                        task: $adbadf3fc7998dca$var$source.staticProperty[`${task}`][0]['task'],
                        call: $adbadf3fc7998dca$var$source.staticProperty[`${task}`][0]['call']
                    });
                    $adbadf3fc7998dca$var$source.staticProperty[`${task}`].shift();
                }
                if ($adbadf3fc7998dca$var$remove.staticProperty[`${task}`]) {
                    delete $adbadf3fc7998dca$var$target.staticProperty[`${task}`];
                    delete $adbadf3fc7998dca$var$remove.staticProperty[`${task}`];
                }
                delete $adbadf3fc7998dca$var$source.staticProperty[`${task}`];
                resolve(true);
            }
        } catch (e) {
            console.log('error', e);
            resolve(false);
        }
    });
};
let $adbadf3fc7998dca$var$promise = (task, message, call)=>{
    return new Promise((resolve, reject)=>{
        try {
            if ($1b18bf45954afeed$export$9099ad97b570f7c($adbadf3fc7998dca$var$target.staticProperty[`${task}`])) {
                console.log(`  ${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[2][3]}`, task + ' process');
                $adbadf3fc7998dca$var$source.staticProperty[`${task}`] = {
                    message: message,
                    task: task,
                    call: call
                };
                resolve(true);
            } else {
                console.log(`  ${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[1][3]}`, task + ' process');
                $adbadf3fc7998dca$var$source.staticProperty[`${task}`] = {
                    message: message,
                    task: task,
                    call: call
                };
                while(!$1b18bf45954afeed$export$9099ad97b570f7c($adbadf3fc7998dca$var$source.staticProperty[`${task}`][0])){
                    $adbadf3fc7998dca$var$target.staticProperty[`${task}`].forEach((item)=>{
                        item.call({
                            message: $adbadf3fc7998dca$var$source.staticProperty[`${task}`][0]['message'],
                            task: $adbadf3fc7998dca$var$source.staticProperty[`${task}`][0]['task'],
                            call: $adbadf3fc7998dca$var$source.staticProperty[`${task}`][0]['call']
                        });
                    });
                    $adbadf3fc7998dca$var$source.staticProperty[`${task}`].shift();
                }
                if ($adbadf3fc7998dca$var$remove.staticProperty[`${task}`]) {
                    delete $adbadf3fc7998dca$var$target.staticProperty[`${task}`];
                    delete $adbadf3fc7998dca$var$remove.staticProperty[`${task}`];
                }
                delete $adbadf3fc7998dca$var$source.staticProperty[`${task}`];
                resolve(true);
            }
        } catch (e) {
            resolve({
                status: 'false',
                success: false,
                message: e
            });
        }
    });
};
var $adbadf3fc7998dca$export$9099ad97b570f7c = {
    list: $adbadf3fc7998dca$var$list,
    close: $adbadf3fc7998dca$var$close,
    await: $adbadf3fc7998dca$var$wait,
    promise: $adbadf3fc7998dca$var$promise
};



var $1b990a7c053eeed9$export$9099ad97b570f7c = {
    send: (task = '', message = {
    }, callback = false, skip = true)=>{
        return new Promise(async (resolve, reject)=>{
            if (skip) {
                console.log(`${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[1][0]}`, task + ' start');
                await $adbadf3fc7998dca$export$9099ad97b570f7c.promise(task, message, (event)=>{
                    console.log(`    ${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[2][0]}`, task, 'finish');
                    /**
                     * Неопределённое поведение если в одном месте есть callback а в другом нет
                     */ callback ? resolve(callback(event)) : resolve(event);
                });
            } else {
                console.log(`    ${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[0][2]}`, `${task} stop`);
                resolve({
                    status: true,
                    message: 'stop',
                    _scriptDir: "file:///src/github.com/zababurinsv/z-events-private/task/src/index.mjs"
                });
            }
        });
    },
    await: (task = '', call = (event)=>{
        console.log('default call', event);
    })=>{
        console.log(`${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[0][0]}`, task);
        return $adbadf3fc7998dca$export$9099ad97b570f7c.await(task, call);
    },
    list: ()=>{
        return $adbadf3fc7998dca$export$9099ad97b570f7c.list().then((item)=>{
            console.log(`${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[0][1]}`, item);
        });
    },
    close: (task = '')=>{
        return $adbadf3fc7998dca$export$9099ad97b570f7c.close(task).then((item)=>{
            console.log(`${$dfe731a04a9a6860$export$9099ad97b570f7c('moon')[0][3]}`, item);
        });
    }
};


export {$1b990a7c053eeed9$export$9099ad97b570f7c as default};
//# sourceMappingURL=index.mjs.map
