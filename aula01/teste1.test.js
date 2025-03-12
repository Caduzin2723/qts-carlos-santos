import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "https://deno.land/std/testing/asserts.ts/"

// import { doesNotMatch } from 'node:assert';
// import assert from 'node:assert/strict';

// assert.doesNotMatch('I will fail', /fail/);
// // AssertionError [ERR_ASSERTION]: The input was expected to not match the ...

// assert.doesNotMatch(123, /pass/);
// // AssertionError [ERR_ASSERTION]: The "string" argument must be of type string.

// assert.doesNotMatch('I will pass', /different/);
// // OK


// doesNotMatch(
//     value: string,
//     regExp: RegExp,
//     message?: string | Error,
// ): void

var dois = 2;
var cinco = 5;
var soma = dois + cinco;
var multiplicacaofalha = dois * cinco + 1;

Deno.test("Teste de Soma", () => {
    assertEquals(soma, 7,
        "Coé parceiro, essa soma deu errado ai em, fica esperto",
    );
});

Deno.test("Isso tem que estar incorreto", () => {
    assertEquals(multiplicacaofalha, 10,
        "Coé parceiro, essa multiplicação deu errado ai em, fica esperto",
    );
});