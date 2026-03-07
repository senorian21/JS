function declareWinner(fighter1, fighter2, firstAttacker) {

    let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2
    let defender = fighter1.name === firstAttacker ? fighter2 : fighter1

    while (true) {

        defender.health -= attacker.damagePerAttack

        if(defender.health <= 0) {
            return attacker.name
        }

        [defender, attacker] = [attacker, defender]

    }
}