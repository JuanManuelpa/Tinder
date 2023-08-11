/**
 * @param { import("knex").knex } knex
 * @returns { Promisevoid }
 */

export.up = function(knex) {
    
    };
    
    /**
     @param { import("knex").knex } knex
     * @returns { Promisevoid }
     */
     export.down = function(knex) {
        eturn knex.schema.hasTable('habilidades').then (function(exist){
            if(exist){
                return knex.schema.dropTable('habilidades');
            }
        }}
     };
     