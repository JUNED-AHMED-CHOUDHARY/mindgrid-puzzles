// Verified Daily Puzzle Suites for MindGrid Web Funnel
const WEEKLY_PUZZLES = [
  {
    "dayIndex": 0,
    "dayName": "Sunday",
    "title": "Sunday Calcudoku",
    "grid": [
      [
        3,
        2,
        1,
        4
      ],
      [
        2,
        4,
        3,
        1
      ],
      [
        1,
        3,
        4,
        2
      ],
      [
        4,
        1,
        2,
        3
      ]
    ],
    "cages": [
      {
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ],
        "target": 6,
        "op": "x"
      },
      {
        "cells": [
          [
            0,
            2
          ],
          [
            1,
            2
          ]
        ],
        "target": 4,
        "op": "+"
      },
      {
        "cells": [
          [
            0,
            3
          ],
          [
            1,
            3
          ]
        ],
        "target": 4,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            0
          ]
        ],
        "target": 2,
        "op": ""
      },
      {
        "cells": [
          [
            1,
            1
          ],
          [
            2,
            1
          ]
        ],
        "target": 7,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            0
          ],
          [
            3,
            0
          ]
        ],
        "target": 5,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            2
          ],
          [
            2,
            3
          ]
        ],
        "target": 2,
        "op": "/"
      },
      {
        "cells": [
          [
            3,
            1
          ],
          [
            3,
            2
          ]
        ],
        "target": 2,
        "op": "/"
      },
      {
        "cells": [
          [
            3,
            3
          ]
        ],
        "target": 3,
        "op": ""
      }
    ]
  },
  {
    "dayIndex": 1,
    "dayName": "Monday",
    "title": "Monday Calcudoku",
    "grid": [
      [
        1,
        2,
        3,
        4
      ],
      [
        3,
        4,
        1,
        2
      ],
      [
        4,
        1,
        2,
        3
      ],
      [
        2,
        3,
        4,
        1
      ]
    ],
    "cages": [
      {
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ],
        "target": 2,
        "op": "/"
      },
      {
        "cells": [
          [
            0,
            2
          ],
          [
            0,
            3
          ]
        ],
        "target": 12,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            0
          ],
          [
            2,
            0
          ]
        ],
        "target": 7,
        "op": "+"
      },
      {
        "cells": [
          [
            1,
            1
          ],
          [
            1,
            2
          ]
        ],
        "target": 5,
        "op": "+"
      },
      {
        "cells": [
          [
            1,
            3
          ],
          [
            2,
            3
          ]
        ],
        "target": 5,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            1
          ],
          [
            3,
            1
          ]
        ],
        "target": 4,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            2
          ],
          [
            3,
            2
          ]
        ],
        "target": 8,
        "op": "x"
      },
      {
        "cells": [
          [
            3,
            0
          ]
        ],
        "target": 2,
        "op": ""
      },
      {
        "cells": [
          [
            3,
            3
          ]
        ],
        "target": 1,
        "op": ""
      }
    ]
  },
  {
    "dayIndex": 2,
    "dayName": "Tuesday",
    "title": "Tuesday Calcudoku",
    "grid": [
      [
        4,
        1,
        2,
        3
      ],
      [
        1,
        3,
        4,
        2
      ],
      [
        2,
        4,
        3,
        1
      ],
      [
        3,
        2,
        1,
        4
      ]
    ],
    "cages": [
      {
        "cells": [
          [
            0,
            0
          ],
          [
            1,
            0
          ]
        ],
        "target": 4,
        "op": "x"
      },
      {
        "cells": [
          [
            0,
            1
          ],
          [
            0,
            2
          ]
        ],
        "target": 3,
        "op": "+"
      },
      {
        "cells": [
          [
            0,
            3
          ],
          [
            1,
            3
          ]
        ],
        "target": 1,
        "op": "-"
      },
      {
        "cells": [
          [
            1,
            1
          ],
          [
            1,
            2
          ]
        ],
        "target": 7,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            0
          ],
          [
            3,
            0
          ]
        ],
        "target": 5,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            1
          ],
          [
            3,
            1
          ]
        ],
        "target": 6,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            2
          ],
          [
            2,
            3
          ]
        ],
        "target": 3,
        "op": "x"
      },
      {
        "cells": [
          [
            3,
            2
          ],
          [
            3,
            3
          ]
        ],
        "target": 4,
        "op": "/"
      }
    ]
  },
  {
    "dayIndex": 3,
    "dayName": "Wednesday",
    "title": "Wednesday Calcudoku",
    "grid": [
      [
        2,
        3,
        4,
        1
      ],
      [
        4,
        1,
        2,
        3
      ],
      [
        3,
        4,
        1,
        2
      ],
      [
        1,
        2,
        3,
        4
      ]
    ],
    "cages": [
      {
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ],
        "target": 6,
        "op": "x"
      },
      {
        "cells": [
          [
            0,
            2
          ],
          [
            0,
            3
          ]
        ],
        "target": 4,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            0
          ],
          [
            2,
            0
          ]
        ],
        "target": 7,
        "op": "+"
      },
      {
        "cells": [
          [
            1,
            1
          ],
          [
            2,
            1
          ]
        ],
        "target": 5,
        "op": "+"
      },
      {
        "cells": [
          [
            1,
            2
          ],
          [
            1,
            3
          ]
        ],
        "target": 6,
        "op": "x"
      },
      {
        "cells": [
          [
            2,
            2
          ],
          [
            3,
            2
          ]
        ],
        "target": 3,
        "op": "x"
      },
      {
        "cells": [
          [
            2,
            3
          ],
          [
            3,
            3
          ]
        ],
        "target": 2,
        "op": "/"
      },
      {
        "cells": [
          [
            3,
            0
          ],
          [
            3,
            1
          ]
        ],
        "target": 2,
        "op": "/"
      }
    ]
  },
  {
    "dayIndex": 4,
    "dayName": "Thursday",
    "title": "Thursday Calcudoku",
    "grid": [
      [
        3,
        4,
        1,
        2
      ],
      [
        2,
        1,
        4,
        3
      ],
      [
        4,
        3,
        2,
        1
      ],
      [
        1,
        2,
        3,
        4
      ]
    ],
    "cages": [
      {
        "cells": [
          [
            0,
            0
          ],
          [
            1,
            0
          ]
        ],
        "target": 6,
        "op": "x"
      },
      {
        "cells": [
          [
            0,
            1
          ],
          [
            0,
            2
          ]
        ],
        "target": 4,
        "op": "x"
      },
      {
        "cells": [
          [
            0,
            3
          ],
          [
            1,
            3
          ]
        ],
        "target": 6,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            1
          ],
          [
            2,
            1
          ]
        ],
        "target": 4,
        "op": "+"
      },
      {
        "cells": [
          [
            1,
            2
          ],
          [
            2,
            2
          ]
        ],
        "target": 8,
        "op": "x"
      },
      {
        "cells": [
          [
            2,
            0
          ],
          [
            3,
            0
          ]
        ],
        "target": 4,
        "op": "/"
      },
      {
        "cells": [
          [
            2,
            3
          ],
          [
            3,
            3
          ]
        ],
        "target": 4,
        "op": "x"
      },
      {
        "cells": [
          [
            3,
            1
          ],
          [
            3,
            2
          ]
        ],
        "target": 1,
        "op": "-"
      }
    ]
  },
  {
    "dayIndex": 5,
    "dayName": "Friday",
    "title": "Friday Calcudoku",
    "grid": [
      [
        1,
        4,
        2,
        3
      ],
      [
        2,
        3,
        1,
        4
      ],
      [
        3,
        1,
        4,
        2
      ],
      [
        4,
        2,
        3,
        1
      ]
    ],
    "cages": [
      {
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ],
        "target": 4,
        "op": "x"
      },
      {
        "cells": [
          [
            0,
            2
          ],
          [
            1,
            2
          ]
        ],
        "target": 2,
        "op": "/"
      },
      {
        "cells": [
          [
            0,
            3
          ],
          [
            1,
            3
          ]
        ],
        "target": 12,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            0
          ],
          [
            2,
            0
          ]
        ],
        "target": 6,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            1
          ],
          [
            2,
            1
          ]
        ],
        "target": 4,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            2
          ],
          [
            3,
            2
          ]
        ],
        "target": 7,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            3
          ],
          [
            3,
            3
          ]
        ],
        "target": 2,
        "op": "/"
      },
      {
        "cells": [
          [
            3,
            0
          ],
          [
            3,
            1
          ]
        ],
        "target": 2,
        "op": "/"
      }
    ]
  },
  {
    "dayIndex": 6,
    "dayName": "Saturday",
    "title": "Saturday Calcudoku",
    "grid": [
      [
        4,
        2,
        3,
        1
      ],
      [
        3,
        1,
        4,
        2
      ],
      [
        1,
        4,
        2,
        3
      ],
      [
        2,
        3,
        1,
        4
      ]
    ],
    "cages": [
      {
        "cells": [
          [
            0,
            0
          ],
          [
            0,
            1
          ]
        ],
        "target": 8,
        "op": "x"
      },
      {
        "cells": [
          [
            0,
            2
          ],
          [
            0,
            3
          ]
        ],
        "target": 3,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            0
          ],
          [
            2,
            0
          ]
        ],
        "target": 3,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            1
          ],
          [
            1,
            2
          ]
        ],
        "target": 4,
        "op": "x"
      },
      {
        "cells": [
          [
            1,
            3
          ],
          [
            2,
            3
          ]
        ],
        "target": 6,
        "op": "x"
      },
      {
        "cells": [
          [
            2,
            1
          ],
          [
            3,
            1
          ]
        ],
        "target": 7,
        "op": "+"
      },
      {
        "cells": [
          [
            2,
            2
          ],
          [
            3,
            2
          ]
        ],
        "target": 2,
        "op": "/"
      },
      {
        "cells": [
          [
            3,
            0
          ]
        ],
        "target": 2,
        "op": ""
      },
      {
        "cells": [
          [
            3,
            3
          ]
        ],
        "target": 4,
        "op": ""
      }
    ]
  }
];
const WEEKLY_FUTOSHIKI = [
  {
    "dayName": "Sunday",
    "title": "Sunday Futoshiki",
    "grid": [
      [
        3,
        2,
        1,
        4
      ],
      [
        2,
        4,
        3,
        1
      ],
      [
        1,
        3,
        4,
        2
      ],
      [
        4,
        1,
        2,
        3
      ]
    ],
    "givens": {
      "0,0": 3,
      "2,2": 4
    },
    "inequalities": [
      {
        "type": "H",
        "r": 0,
        "c1": 0,
        "c2": 1,
        "sign": ">"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 1,
        "c2": 2,
        "sign": ">"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 2,
        "c2": 3,
        "sign": "<"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 0,
        "sign": "v"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 1,
        "sign": "^"
      }
    ]
  },
  {
    "dayName": "Monday",
    "title": "Monday Futoshiki",
    "grid": [
      [
        1,
        2,
        3,
        4
      ],
      [
        3,
        4,
        1,
        2
      ],
      [
        4,
        1,
        2,
        3
      ],
      [
        2,
        3,
        4,
        1
      ]
    ],
    "givens": {
      "0,0": 1,
      "2,2": 2
    },
    "inequalities": [
      {
        "type": "H",
        "r": 0,
        "c1": 0,
        "c2": 1,
        "sign": "<"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 1,
        "c2": 2,
        "sign": "<"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 2,
        "c2": 3,
        "sign": "<"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 0,
        "sign": "^"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 1,
        "sign": "^"
      }
    ]
  },
  {
    "dayName": "Tuesday",
    "title": "Tuesday Futoshiki",
    "grid": [
      [
        4,
        1,
        2,
        3
      ],
      [
        1,
        3,
        4,
        2
      ],
      [
        2,
        4,
        3,
        1
      ],
      [
        3,
        2,
        1,
        4
      ]
    ],
    "givens": {
      "0,0": 4,
      "2,2": 3
    },
    "inequalities": [
      {
        "type": "H",
        "r": 0,
        "c1": 0,
        "c2": 1,
        "sign": ">"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 1,
        "c2": 2,
        "sign": "<"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 2,
        "c2": 3,
        "sign": "<"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 0,
        "sign": "v"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 1,
        "sign": "^"
      }
    ]
  },
  {
    "dayName": "Wednesday",
    "title": "Wednesday Futoshiki",
    "grid": [
      [
        2,
        3,
        4,
        1
      ],
      [
        4,
        1,
        2,
        3
      ],
      [
        3,
        4,
        1,
        2
      ],
      [
        1,
        2,
        3,
        4
      ]
    ],
    "givens": {
      "0,0": 2,
      "2,2": 1
    },
    "inequalities": [
      {
        "type": "H",
        "r": 0,
        "c1": 0,
        "c2": 1,
        "sign": "<"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 1,
        "c2": 2,
        "sign": "<"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 2,
        "c2": 3,
        "sign": ">"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 0,
        "sign": "^"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 1,
        "sign": "v"
      }
    ]
  },
  {
    "dayName": "Thursday",
    "title": "Thursday Futoshiki",
    "grid": [
      [
        3,
        4,
        1,
        2
      ],
      [
        2,
        1,
        4,
        3
      ],
      [
        4,
        3,
        2,
        1
      ],
      [
        1,
        2,
        3,
        4
      ]
    ],
    "givens": {
      "0,0": 3,
      "2,2": 2
    },
    "inequalities": [
      {
        "type": "H",
        "r": 0,
        "c1": 0,
        "c2": 1,
        "sign": "<"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 1,
        "c2": 2,
        "sign": ">"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 2,
        "c2": 3,
        "sign": "<"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 0,
        "sign": "v"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 1,
        "sign": "v"
      }
    ]
  },
  {
    "dayName": "Friday",
    "title": "Friday Futoshiki",
    "grid": [
      [
        1,
        4,
        2,
        3
      ],
      [
        2,
        3,
        1,
        4
      ],
      [
        3,
        1,
        4,
        2
      ],
      [
        4,
        2,
        3,
        1
      ]
    ],
    "givens": {
      "0,0": 1,
      "2,2": 4
    },
    "inequalities": [
      {
        "type": "H",
        "r": 0,
        "c1": 0,
        "c2": 1,
        "sign": "<"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 1,
        "c2": 2,
        "sign": ">"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 2,
        "c2": 3,
        "sign": "<"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 0,
        "sign": "^"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 1,
        "sign": "v"
      }
    ]
  },
  {
    "dayName": "Saturday",
    "title": "Saturday Futoshiki",
    "grid": [
      [
        4,
        2,
        3,
        1
      ],
      [
        3,
        1,
        4,
        2
      ],
      [
        1,
        4,
        2,
        3
      ],
      [
        2,
        3,
        1,
        4
      ]
    ],
    "givens": {
      "0,0": 4,
      "2,2": 2
    },
    "inequalities": [
      {
        "type": "H",
        "r": 0,
        "c1": 0,
        "c2": 1,
        "sign": ">"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 1,
        "c2": 2,
        "sign": "<"
      },
      {
        "type": "H",
        "r": 0,
        "c1": 2,
        "c2": 3,
        "sign": ">"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 0,
        "sign": "v"
      },
      {
        "type": "V",
        "r1": 0,
        "r2": 1,
        "c": 1,
        "sign": "v"
      }
    ]
  }
];
