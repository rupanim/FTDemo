

    app.factory('AbbrvList', [
        function () {
            return function () {
                var abbrvList = ['MA', 'MI', 'CA', 'RI', 'PA'];
                return abbrvList;
            }
        }
    ]);

    app.factory('DefinitionList', [
        function () {
            return function () {
                var definitionList = ['Massachusetts', 'Michigan', 'California', 'Rhode Island', 'Pennsylvania'];
                return definitionList;
            }
        }
    ]);

    app.factory('MatchFunc', [
        function () {
            return function (abbrv, defintion) {

                var matched = false;

                var matchList = [{ key: "MA", value: "Massachusetts" },
                { key: "MI", value: "Michigan" },
                { key: "CA", value: "California" },
                { key: "RI", value: "Rhode Island" },
                { key: "PA", value: "Pennsylvania" }];

                for (var index = 0; index < matchList.length; ++index) {
                    if (matchList[index].key == abbrv) {
                        if (matchList[index].value == defintion) {
                            matched = true;
                            break;
                        }
                    }
                }
                return matched;
            }
        }
    ]);

