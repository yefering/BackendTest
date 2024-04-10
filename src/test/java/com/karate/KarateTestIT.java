package com.karate;

import com.intuit.karate.junit5.Karate;

class Runner {
    @Karate.Test
    Karate getOffers() {
        return Karate.run("src/test/java/com/karate/Backend.feature").tags("@testBackend");
    }
}

