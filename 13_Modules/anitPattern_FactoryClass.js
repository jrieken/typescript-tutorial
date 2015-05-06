var WhateverFactory = (function () {
    function WhateverFactory() {
    }
    WhateverFactory.newWhatever = function () {
        return 42;
    };
    return WhateverFactory;
})();
WhateverFactory.newWhatever();
//new WhateverFactory() ? 
