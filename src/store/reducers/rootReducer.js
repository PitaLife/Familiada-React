import * as actionTypes from '../actions/actionTypes';
const questions = [
  {
    id: 1,
    question: 'Apa yang ada di rumah sakit ?',
    answers: [
      {
        id: 1,
        name: 'doktr',
        points: 35,
        correct: false
      },
      {
        id: 2,
        name: 'perawat',
        points: 26,
        correct: false
      },
      {
        id: 3,
        name: 'pasien',
        points: 14,
        correct: false
      },
      {
        id: 4,
        name: 'jarum suntik',
        points: 10,
        correct: false
      },
	  {
        id: 5,
        name: 'mayat',
        points: 7,
        correct: false
      },
	  {
        id: 6,
        name: 'kursi roda',
        points: 4,
        correct: false
      },
	  {
        id: 7,
        name: 'ruang tunggu',
        points: 3,
        correct: false
      },
	  {
        id: 8,
        name: 'termometer',
        points: 1,
        correct: false
      }
    ]
  },
  {
    id: 2,
    question: 'Sebutkan cita-cita anak sewaktu sd?',
    answers: [
      {
        id: 1,
        name: 'dokter',
        points: 38,
        correct: false
      },
      {
        id: 2,
        name: 'presiden',
        points: 25,
        correct: false
      },
      {
        id: 3,
        name: 'polisi',
        points: 16,
        correct: false
      },
	  {
        id: 4,
        name: 'tentara',
        points: 11,
        correct: false
      },
	  {
        id: 5,
        name: 'guru',
        points: 5,
        correct: false
      },
	  {
        id: 6,
        name: 'insinyur',
        points: 3,
        correct: false
      },
	  {
        id: 7,
        name: 'pilot',
        points: 2,
        correct: false
      }
    ]
  },
  {
    id: 3,
    question: 'Sebutkan hewan yg selalu membawa rumahnya kemana saja?',
    answers: [
      {
        id: 1,
        name: 'keong',
        points: 34,
        correct: false
      },
      {
        id: 2,
        name: 'siput',
        points: 26,
        correct: false
      },
      {
        id: 3,
        name: 'kura-kura',
        points: 15,
        correct: false
      },
      {
        id: 4,
        name: 'penyu',
        points: 11,
        correct: false
      },
	  {
        id: 5,
        name: 'kerang',
        points: 10,
        correct: false
      },
	  {
        id: 6,
        name: 'bekicot',
        points: 4,
        correct: false
      }
    ]
  },
  {
    id: 4,
    question: 'Darimana orang mendapatkan resep makanan ?',
    answers: [
      {
        id: 1,
        name: 'majalah / koran',
        points: 42,
        correct: false
      },
      {
        id: 2,
        name: 'buku resep / buku',
        points: 22,
        correct: false
      },
      {
        id: 3,
        name: 'internet',
        points: 15,
        correct: false
      },
      {
        id: 4,
        name: 'televisi',
        points: 10,
        correct: false
      },
      {
        id: 5,
        name: 'orang tua',
        points: 5,
        correct: false
      },
	  {
        id: 6,
        name: 'kursus',
        points: 3,
        correct: false
      }
    ]
  },
  {
    id: 5,
    question: 'Sebutkan hewan mamalia?',
    answers: [
      {
        id: 1,
        name: 'anjing',
        points: 30,
        correct: false
      },
      {
        id: 2,
        name: 'kucing',
        points: 27,
        correct: false
      },
      {
        id: 3,
        name: 'singa',
        points: 21,
        correct: false
      },
      {
        id: 4,
        name: 'kelinci',
        points: 17,
        correct: false
      },
      {
        id: 5,
        name: 'beruang',
        points: 5,
        correct: false
      }
    ]
  },
  {
    id: 6,
    question: 'Sebutkan makanan yang disukai anak-anak?',
    answers: [
      {
        id: 1,
        name: 'chiki',
        points: 42,
        correct: false
      },
      {
        id: 2,
        name: 'permen',
        points: 33,
        correct: false
      },
      {
        id: 3,
        name: 'manisan',
        points: 12,
        correct: false
      },
      {
        id: 4,
        name: 'cokelat',
        points: 10,
        correct: false
      },
      {
        id: 5,
        name: 'coki-coki',
        points: 3,
        correct: false
      }
    ]
  },
  {
    id: 7,
    question: 'Selain kacang hijau, sebutkan ragam isi bakpau?',
    answers: [
      {
        id: 1,
        name: 'kacang hitam',
        points: 37,
        correct: false
      },
      {
        id: 2,
        name: 'cokelat',
        points: 26,
        correct: false
      },
      {
        id: 3,
        name: 'daging',
        points: 22,
        correct: false
      },
	  {
        id: 4,
        name: 'kentang',
        points: 16,
        correct: false
      }
    ]
  },
  {
    id: 8,
    question: 'Sebutkan buah berawalan huruf D?',
    answers: [
      {
        id: 1,
        name: 'delima',
        points: 41,
        correct: false
      },
      {
        id: 2,
        name: 'durian',
        points: 37,
        correct: false
      },
      {
        id: 3,
        name: 'duku',
        points: 22,
        correct: false
      }
    ]
  }
];
const initialState = {
  currentQuestion: null,
  questions,
  team1: {
    name: 'team1',
    points: 0,
    fails: 0
  },
  team2: {
    name: 'team2',
    points: 0,
    fails: 0
  },
  gameStarted: false,
  inputValue: '',
  activeTeam: 'team1',
  winner: null,
  whosFirst: false,
  surname1: '',
  surname2: ''
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.WHOS_FIRST:
      return {
        ...state,
        activeTeam: action.payload,
        whosFirst: false
      };
    case actionTypes.INPUT_CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case actionTypes.STARG_GAME:
      return {
        ...state,
        team1: {
          ...state.team1,
          name: state.surname1
        },
        team2: {
          ...state.team2,
          name: state.surname2
        },
        whosFirst: true,
        gameStarted: true
      };

    case actionTypes.NEW_QUESTION:
      const question =
        state.questions[Math.floor(Math.random() * state.questions.length)];
      const newQuestions = questions.filter(q => q !== question);
      return {
        ...state,
        whosFirst: state.gameStarted,
        currentQuestion: question,
        questions: newQuestions,
        team1: {
          ...state.team1,
          fails: 0
        },
        team2: {
          ...state.team2,
          fails: 0
        }
      };
    case actionTypes.CORRECT_ANSWERS:
      const activeTeam = state.activeTeam;
      return {
        ...state,
        inputValue: '',
        [activeTeam]: {
          ...state[activeTeam],
          points: state[activeTeam].points + action.payload.answer[0].points
        }
      };

    case actionTypes.ADD_FAILS:
      const active = state.activeTeam;
      return {
        ...state,
        inputValue: '',
        activeTeam: active,
        [active]: {
          ...state[active],
          fails: state[active].fails + 1
        }
      };
    case actionTypes.HANDLE_CHECK_FAILS:
      const team = action.payload;
      return {
        ...state,
        activeTeam: team,
        [team]: {
          ...state[team],
          fails: 2
        }
      };
    case actionTypes.NEW_WINNER:
      return {
        ...state,
        winner: action.payload
      };
    default:
      return state;
  }
};
