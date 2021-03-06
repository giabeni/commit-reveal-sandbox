import { DrawEventType } from '../enums/draw-event-type.enum';
import { Draw } from '../entities/draw.entity';
import { Stakeholder } from '../entities/stakeholder.entity';
import { Commit } from '../../commit-reveal/interfaces/commit.interface';
import { DrawStatus } from '../enums/draw-status.enum';
import { Candidate } from '../entities/candidate.entity';
import { SignedCommit } from '../../commit-reveal/interfaces/signed-commit.interface';
import { SignedReveal } from '../../commit-reveal/interfaces/signed-reveal.interface';
import { Reveal } from '../../commit-reveal/interfaces/reveal.interface';
import { DrawAck } from './draw-ack.interface';

export type DrawEvent = {
  drawUuid?: string;
  timestamp?: number;
  from?: Stakeholder;
  eventId?: string;
} & (
  | {
      type: DrawEventType.DRAW_CREATED;
      data: Draw;
    }
  | {
      type: DrawEventType.DRAW_DELETED;
      data: Draw;
    }
  | {
      type: DrawEventType.STAKEHOLDER_SUBSCRIBED;
      data: Stakeholder;
    }
  | {
      type: DrawEventType.STAKEHOLDER_UNSUBSCRIBED;
      data: Stakeholder;
    }
  | {
      type: DrawEventType.CANDIDATE_SUBSCRIBED;
      data: Candidate;
    }
  | {
      type: DrawEventType.COMMIT_RECEIVED;
      data: SignedCommit;
    }
  | {
      type: DrawEventType.REVEAL_RECEIVED;
      data: SignedReveal;
    }
  | {
      type: DrawEventType.STATUS_CHANGED;
      data: DrawStatus;
    }
  | {
      type: DrawEventType.ACK;
      data: DrawAck;
    }
  | DrawErrorEvent
);

export type DrawErrorEvent =
  | {
      type: DrawEventType.CANDIDATE_UNSUBSCRIBED;
      data: Candidate;
    }
  | {
      type: DrawEventType.WRONG_COMMIT_FORMAT;
      data: SignedCommit;
    }
  | {
      type: DrawEventType.WRONG_REVEAL_FORMAT;
      data: SignedCommit;
    }
  | {
      type: DrawEventType.DUPLICATE_COMMIT;
      data: SignedCommit;
    }
  | {
      type: DrawEventType.DUPLICATE_REVEAL;
      data: SignedCommit;
    }
  | {
      type: DrawEventType.INVALID_REVEAL_MASK;
      data: SignedCommit;
    }
  | {
      type: DrawEventType.FORBIDDEN_COMMIT_USER_ID;
      data: SignedCommit;
    }
  | {
      type: DrawEventType.FORBIDDEN_REVEAL_USER_ID;
      data: SignedReveal;
    }
  | {
      type: DrawEventType.UNAUTHORIZED_COMMIT_SIGNATURE;
      data: SignedCommit;
    }
  | {
      type: DrawEventType.UNAUTHORIZED_REVEAL_SIGNATURE;
      data: SignedReveal;
    };
