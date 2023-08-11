/**
 * @param { import("knex").knex } knex
 * @returns { Promisevoid }
 */

export.up = function(knex) {
return knex.schema.hasTable('empresas').then (function(exist){
    if(!exist){
        return knex.schema.createTacle('empresas',function(table){
            table.Increments('id_empresas').primary();
            table.string('nombre_empresa').notNullable();
        })
    }
})
};

/**
 @param { import("knex").knex } knex
 * @returns { Promisevoid }
 */
 export.down = function(knex) {
    eturn knex.schema.hasTable('empresas').then (function(exist){
        if(exist){
            return knex.schema.dropTable('empresas');
        }
    }}
 };
 