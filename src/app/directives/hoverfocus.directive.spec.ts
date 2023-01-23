/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HoverFocusDirective } from './hoverfocus.directive';

@Component({
    template: `<input type="text" hoverfocus>`
})
class TestHoverFocusComponent {
}


describe('Directive: HoverFocus', () => {

    let component: TestHoverFocusComponent;
    let fixture: ComponentFixture<TestHoverFocusComponent>;
    let inputEl: DebugElement;

    beforeEach(() => {
      TestBed.resetTestingModule()
        TestBed.configureTestingModule({
            declarations: [TestHoverFocusComponent, HoverFocusDirective]
        });
        fixture = TestBed.createComponent(TestHoverFocusComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(By.css('input'));
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('hovering over input', () => {
        inputEl.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

        inputEl.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
    });
});
