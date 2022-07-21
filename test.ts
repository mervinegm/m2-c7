import test from 'ava';
import {Persona} from "./clases"

test('testeando is ok', function(t) {
	t.is("hola", "hola");
});

test('testeando is not-ok', function(t) {
	t.is("hola", "chao");
});

test('testeando clase Person', function(t) {
    const persona1 = new Persona("Mervin");
	t.is(persona1.nombre, "Mervin");
});