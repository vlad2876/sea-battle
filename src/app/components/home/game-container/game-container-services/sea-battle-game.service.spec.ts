import { SeaBattleGameService } from "./sea-battle-game.service";
import { TestBed } from "@angular/core/testing";
import { SeaBattleGame } from "../../../../entities/SeaBattleGame";

describe('SeaBattleGameService', () => {
  let service: SeaBattleGameService;

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
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe(' the completeShot method', () => {

    it('should call the SeaBattleGame completeShot method, when ship position equals to current shot column', () => {
      spyOnProperty(fakeSeaBattleGame, 'shots', 'get').and.returnValue(0);

      const currentShotColumn = fakeSeaBattleGame.shots;
      const currentShipPosition = 0;

      spyOn(service, 'completeShot').and.callFake(() => {
        if (currentShotColumn === currentShipPosition) {
          fakeSeaBattleGame.completeShot(1);
        }
      });
      service.completeShot(1);
      expect(fakeSeaBattleGame.completeShot).toHaveBeenCalled();
    });
  });
});
