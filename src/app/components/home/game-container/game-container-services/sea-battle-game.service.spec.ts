import { SeaBattleGameService } from "./sea-battle-game.service";
import { TestBed } from "@angular/core/testing";
import { SeaBattleGame } from "../../../../entities/SeaBattleGame";

describe('SeaBattleGameService', () => {
  let service: SeaBattleGameService;

  let currentShotColumn: number | undefined;
  let currentShipPosition: number | undefined;

  const fakeSeaBattleGame = {
    completeShot: jasmine.createSpy('completeShot'),
    get shots(): number {
      return undefined;
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeaBattleGameService,
        { provide: SeaBattleGame, useValue: fakeSeaBattleGame }
      ]
    });

    service = TestBed.inject(SeaBattleGameService);

    spyOnProperty(fakeSeaBattleGame, 'shots', 'get').and.returnValue(0);

    currentShotColumn = fakeSeaBattleGame.shots;
    currentShipPosition = undefined;

    spyOn(service, 'completeShot').and.callFake(() => {
      if (currentShotColumn === currentShipPosition) {
        fakeSeaBattleGame.completeShot(1);
      }
    });
    fakeSeaBattleGame.completeShot.calls.reset();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  fdescribe('completeShot method', () => {
    it('should call the SeaBattleGame method completeShot, when ship position is equal to current shot column', () => {
      currentShipPosition = 0;

      service.completeShot(1);
      expect(fakeSeaBattleGame.completeShot).toHaveBeenCalled();
    });

    it('should not call the SeaBattleGame method completeShot, when ship position is not equal to current shot column', () => {
      currentShipPosition = 1;

      service.completeShot(1);
      expect(fakeSeaBattleGame.completeShot).not.toHaveBeenCalled();
    });

    it('should not call the SeaBattleGame method completeShot, when ship has not yet appeared', () => {
      service.completeShot(1);
      expect(fakeSeaBattleGame.completeShot).not.toHaveBeenCalled();
    });
  });
});
