$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/basics/cucumber/practice.feature");
formatter.feature({
  "name": "Learning Defensive Techniques",
  "description": "  I want to learn MMA to defend myself",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LearningMMA"
    }
  ]
});
formatter.scenarioOutline({
  "name": "I want to go on a Vacation with Friends",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@BookFlight"
    }
  ]
});
formatter.step({
  "name": "We have vacation days",
  "keyword": "Given "
});
formatter.step({
  "name": "We want to go on multiple destination holidays",
  "keyword": "And "
});
formatter.step({
  "name": "We are 3 friends",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "Friend 1",
        "Friend 2",
        "Friend 3"
      ]
    },
    {
      "cells": [
        "Rohan",
        "Mohan",
        "Sohan"
      ]
    },
    {
      "cells": [
        "20",
        "30",
        "40"
      ]
    }
  ]
});
formatter.step({
  "name": "We booked flight to \u003cDestination\u003e on \u003cFromDate\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Return Flight on \u003cToDate\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Destination",
        "FromDate",
        "ToDate"
      ]
    },
    {
      "cells": [
        "Tokyo",
        "10th Dec 2019",
        "20th Dec 2019"
      ]
    },
    {
      "cells": [
        "Hawai",
        "3rd Jan 2020",
        "12th Jan 2020"
      ]
    },
    {
      "cells": [
        "Canada",
        "2nd Feb 2020",
        "18th Feb 2020"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I want to go on a Vacation with Friends",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LearningMMA"
    },
    {
      "name": "@BookFlight"
    }
  ]
});
formatter.step({
  "name": "We have vacation days",
  "keyword": "Given "
});
formatter.match({
  "location": "Practice.We_have(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We want to go on multiple destination holidays",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_want(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We are 3 friends",
  "rows": [
    {
      "cells": [
        "Friend 1",
        "Friend 2",
        "Friend 3"
      ]
    },
    {
      "cells": [
        "Rohan",
        "Mohan",
        "Sohan"
      ]
    },
    {
      "cells": [
        "20",
        "30",
        "40"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_are(int,String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We booked flight to Tokyo on 10th Dec 2019",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_booked(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Return Flight on 20th Dec 2019",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.Return_Flight(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to go on a Vacation with Friends",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LearningMMA"
    },
    {
      "name": "@BookFlight"
    }
  ]
});
formatter.step({
  "name": "We have vacation days",
  "keyword": "Given "
});
formatter.match({
  "location": "Practice.We_have(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We want to go on multiple destination holidays",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_want(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We are 3 friends",
  "rows": [
    {
      "cells": [
        "Friend 1",
        "Friend 2",
        "Friend 3"
      ]
    },
    {
      "cells": [
        "Rohan",
        "Mohan",
        "Sohan"
      ]
    },
    {
      "cells": [
        "20",
        "30",
        "40"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_are(int,String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We booked flight to Hawai on 3rd Jan 2020",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_booked(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Return Flight on 12th Jan 2020",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.Return_Flight(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I want to go on a Vacation with Friends",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LearningMMA"
    },
    {
      "name": "@BookFlight"
    }
  ]
});
formatter.step({
  "name": "We have vacation days",
  "keyword": "Given "
});
formatter.match({
  "location": "Practice.We_have(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We want to go on multiple destination holidays",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_want(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We are 3 friends",
  "rows": [
    {
      "cells": [
        "Friend 1",
        "Friend 2",
        "Friend 3"
      ]
    },
    {
      "cells": [
        "Rohan",
        "Mohan",
        "Sohan"
      ]
    },
    {
      "cells": [
        "20",
        "30",
        "40"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_are(int,String,String\u003e\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "We booked flight to Canada on 2nd Feb 2020",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.We_booked(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Return Flight on 18th Feb 2020",
  "keyword": "And "
});
formatter.match({
  "location": "Practice.Return_Flight(String)"
});
formatter.result({
  "status": "passed"
});
});